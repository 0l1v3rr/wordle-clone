import { FC } from "react";
import { LetterState } from "../App";

interface KeyProps {
  state: LetterState;
  letter: string;
  addLetter: (letter: string) => void;
}

const Key: FC<KeyProps> = (props) => {
  return (
    <button
      onClick={() => props.addLetter(props.letter)}
      className={`
        ${props.state === "correct" ? "bg-wordle-green" : ""} 
        ${props.state === "wrong" ? "bg-wordle-wrong" : ""} 
        ${props.state === "wrong-pos" ? "bg-wordle-yellow" : ""} 
        ${props.state === "default" ? "bg-wordle-btn" : ""} 
        px-3 py-4 rounded-md text-wordle-text font-bold font-arial 
        text-sm transition-all duration-300`}
    >
      {props.letter}
    </button>
  );
};

export default Key;
