import Keyboard from "./components/Keyboard";
import TileGrid from "./components/TileGrid";
import { useCallback, useEffect, useState } from "react";
import dictionary from "./data/dictionary.json";
import targetWords from "./data/targetWords.json";
import GameOverPopup from "./components/GameOverPopup";
import BlurOverlay from "./components/BlurOverlay";

export type LetterState =
  | "default"
  | "active"
  | "wrong"
  | "wrong-pos"
  | "correct";

export interface Letter {
  letter: string;
  letterState: LetterState;
}

const getRandomWord = () =>
  targetWords[Math.floor(Math.random() * targetWords.length)];

const App = () => {
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isGameWon, setIsGameWon] = useState<boolean>(false);

  const [currentWord, setCurrentWord] = useState<string>(getRandomWord());
  const [letterCount, setLetterCount] = useState<number>(0);
  const [nextLetterIdx, setNextLetterIdx] = useState<number>(0);
  const [letters, setLetters] = useState<Letter[]>(
    Array(30).fill({ letter: "", letterState: "default" })
  );

  const getUniqueLetters = useCallback((): [Letter[], Letter[], Letter[]] => {
    const convertToLetterArray = (s: string): Letter[] => {
      const pieces = s.split("");
      const res: Letter[] = pieces.map((letter) => {
        return {
          letter: letter,
          letterState: "default",
        } satisfies Letter;
      });

      for (const l of letters) {
        if (pieces.includes(l.letter)) {
          const idx = pieces.indexOf(l.letter);
          const { letterState } = l;
          const { letterState: resLetterState } = res[idx];

          if (letterState === "active") continue;

          switch (resLetterState) {
            case "default":
              res[idx] = { ...l };
              break;
            case "wrong-pos":
              if (letterState === "correct") {
                res[idx] = { ...l };
              }
              break;
            case "wrong":
              if (letterState === "correct" || letterState === "wrong-pos") {
                res[idx] = { ...l };
              }
              break;
          }
        }
      }

      return res;
    };

    const lineOne = convertToLetterArray("QWERTYUIOP");
    const lineTwo = convertToLetterArray("ASDFGHJKL");
    const lineThree = convertToLetterArray("ZXCVBNM");
    return [lineOne, lineTwo, lineThree];
  }, [letters]);

  const gameOver = () => {
    setCurrentWord(getRandomWord());
    setLetterCount(0);
    setNextLetterIdx(0);
    setLetters(Array(30).fill({ letter: "", letterState: "default" }));
    setIsGameOver(false);
    setIsGameWon(false);
  };

  const addLetter = useCallback(
    (letter: string): void => {
      if (letterCount === 5 || isGameOver || nextLetterIdx >= 30) return;

      setLetters((prev) => {
        const newArr = [...prev];
        newArr[nextLetterIdx] = { letter: letter, letterState: "active" };

        if (letterCount !== 0) {
          newArr[nextLetterIdx - 1] = {
            ...prev[nextLetterIdx - 1],
            letterState: "default",
          };
        }

        setNextLetterIdx((prev) => prev + 1);
        setLetterCount((prev) => prev + 1);

        return newArr;
      });
    },
    [letterCount, nextLetterIdx, isGameOver]
  );

  const removeLastLetter = useCallback((): void => {
    if (letterCount === 0 || isGameOver) return;

    setLetters((prev) => {
      const newArr = [...prev];
      newArr[nextLetterIdx - 1] = { letter: "", letterState: "default" };

      if (letterCount !== 1) {
        newArr[nextLetterIdx - 2] = {
          ...prev[nextLetterIdx - 2],
          letterState: "active",
        };
      }

      setNextLetterIdx((prev) => prev - 1);
      setLetterCount((prev) => prev - 1);

      return newArr;
    });
  }, [nextLetterIdx, letterCount, isGameOver]);

  const enter = useCallback(() => {
    if (letterCount !== 5 || isGameOver) return;

    const currentLetters = [
      letters[nextLetterIdx - 5].letter,
      letters[nextLetterIdx - 4].letter,
      letters[nextLetterIdx - 3].letter,
      letters[nextLetterIdx - 2].letter,
      letters[nextLetterIdx - 1].letter,
    ];

    const word = currentLetters.join("").toLowerCase();

    // the word is guessed
    if (word === currentWord) {
      setLetters((prev) => {
        const newArr = [...prev];

        newArr[nextLetterIdx - 1] = {
          ...prev[nextLetterIdx - 1],
          letterState: "default",
        };

        for (let i = 0; i < currentLetters.length; i++) {
          newArr[nextLetterIdx - (5 - i)].letterState = "correct";
        }

        return newArr;
      });

      setTimeout(() => {
        setIsGameOver(true);
        setIsGameWon(true);
      }, 500);
      return;
    }

    if (!dictionary.includes(word)) return;

    setLetterCount(0);

    setLetters((prev) => {
      const newArr = [...prev];

      newArr[nextLetterIdx - 1] = {
        ...prev[nextLetterIdx - 1],
        letterState: "default",
      };

      for (let i = 0; i < currentLetters.length; i++) {
        const idx = nextLetterIdx - (5 - i);

        // the letter is in the right place
        if (currentLetters[i].toLowerCase() === currentWord[i]) {
          newArr[idx].letterState = "correct";
          continue;
        }

        // the letter is in the wrong place
        if (currentWord.includes(currentLetters[i].toLowerCase())) {
          if (newArr[idx].letterState !== "correct") {
            newArr[idx].letterState = "wrong-pos";
          }
          continue;
        }

        newArr[idx].letterState = "wrong";
      }

      return newArr;
    });

    if (nextLetterIdx === 30) {
      setTimeout(() => {
        setIsGameOver(true);
      }, 500);
    }
  }, [currentWord, letterCount, letters, nextLetterIdx, isGameOver]);

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.isComposing || e.repeat || isGameOver) return;

      const regex = /^[a-zA-Z]$/;
      if (regex.test(e.key)) {
        addLetter(e.key.toUpperCase());
        return;
      }

      if (e.key === "Enter") {
        enter();
        return;
      }

      if (e.key === "Backspace") {
        removeLastLetter();
      }
    },
    [addLetter, enter, removeLastLetter, isGameOver]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div
      className="bg-wordle-bg min-h-screen w-full flex flex-col px-10 
        py-4 items-center gap-6 justify-center"
    >
      <BlurOverlay isActive={isGameOver} />
      <GameOverPopup
        close={gameOver}
        currentWord={currentWord}
        isActive={isGameOver}
        state={isGameWon ? "won" : "lost"}
      />

      <TileGrid letters={letters} />
      <Keyboard
        addLetter={addLetter}
        removeLastLetter={removeLastLetter}
        enter={enter}
        letters={getUniqueLetters()}
      />
    </div>
  );
};

export default App;
