import Keyboard from "./components/Keyboard";
import TileGrid from "./components/TileGrid";
import { useState } from "react";

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
      newArr[nextLetterIdx - 1] = {
        ...prev[nextLetterIdx - 1],
        letterState: "default",
      };

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
      newArr[nextLetterIdx - 2] = {
        ...prev[nextLetterIdx - 2],
        letterState: "active",
      };

      setNextLetterIdx((prev) => prev - 1);
      setLetterCount((prev) => prev - 1);

      return newArr;
    });
  };

  return (
    <div
      className="bg-wordle-bg min-h-screen w-full flex flex-col px-10 
        py-4 items-center gap-10 justify-center"
    >
      <TileGrid letters={letters} />
      <Keyboard addLetter={addLetter} removeLastLetter={removeLastLetter} />
    </div>
  );
};

export default App;
