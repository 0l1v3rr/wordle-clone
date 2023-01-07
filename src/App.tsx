import Keyboard from "./components/Keyboard";
import TileGrid from "./components/TileGrid";
import { useState } from "react";
import dictionary from "./data/dictionary.json";
import targetWords from "./data/targetWords.json";

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

const App = () => {
  const [currentWord, setCurrentWord] = useState<string>("apple");
  const [letterCount, setLetterCount] = useState<number>(0);
  const [nextLetterIdx, setNextLetterIdx] = useState<number>(0);
  const [letters, setLetters] = useState<Letter[]>(
    Array(30).fill({ letter: "", letterState: "default" })
  );

  const addLetter = (letter: string): void => {
    if (letterCount === 5) return;

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
  };

  const removeLastLetter = (): void => {
    if (letterCount === 0) return;

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
  };

  const enter = () => {
    if (letterCount !== 5) return;

    const currentLetters = [
      letters[nextLetterIdx - 5].letter,
      letters[nextLetterIdx - 4].letter,
      letters[nextLetterIdx - 3].letter,
      letters[nextLetterIdx - 2].letter,
      letters[nextLetterIdx - 1].letter,
    ];

    const word = currentLetters.join("").toLowerCase();
    if (!dictionary.includes(word)) return;

    setLetterCount(0);

    setLetters((prev) => {
      const newArr = [...prev];

      newArr[nextLetterIdx - 1] = {
        ...prev[nextLetterIdx - 1],
        letterState: "default",
      };

      for (let i = 0; i < currentLetters.length; i++) {
        // the letter is in the wrong place
        if (currentWord.includes(currentLetters[i].toLowerCase())) {
          newArr[nextLetterIdx - (5 - i)].letterState = "wrong-pos";
        }
      }

      for (let i = 0; i < currentLetters.length; i++) {
        // the letter is in the right place
        if (currentLetters[i].toLowerCase() === currentWord[i]) {
          newArr[nextLetterIdx - (5 - i)].letterState = "correct";
        }
      }

      return newArr;
    });
  };

  return (
    <div
      className="bg-wordle-bg min-h-screen w-full flex flex-col px-10 
        py-4 items-center gap-10 justify-center"
    >
      <TileGrid letters={letters} />
      <Keyboard
        addLetter={addLetter}
        removeLastLetter={removeLastLetter}
        enter={enter}
      />
    </div>
  );
};

export default App;
