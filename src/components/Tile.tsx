import { FC } from "react";
import { LetterState } from "../App";

interface TileProps {
  state: LetterState;
  letter: string;
}

const Tile: FC<TileProps> = ({ state, letter }) => {
  return (
    <div
      className={`
        ${state === "default" ? "border-wordle-wrong bg-transparent" : ""}
        ${state === "correct" ? "border-wordle-green bg-wordle-green" : ""}
        ${state === "wrong" ? "border-wordle-wrong bg-wordle-wrong" : ""}
        ${state === "wrong-pos" ? "border-wordle-yellow bg-wordle-yellow" : ""}
        ${state === "active" ? "border-wordle-btn bg-transparent" : ""}
        w-14 h-14 border-2 border-solid flex items-center justify-center text-2xl 
        text-wordle-text font-bold uppercase`}
    >
      {letter}
    </div>
  );
};

export default Tile;
