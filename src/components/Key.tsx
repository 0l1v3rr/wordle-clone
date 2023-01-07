import { FC } from "react";

interface KeyProps {
  state: "wrong" | "wrong-pos" | "correct" | "default";
  letter: string;
}

const Key: FC<KeyProps> = (props) => {
  return (
    <button
      className={`
        ${props.state === "correct" ? "bg-wordle-green" : ""} 
        ${props.state === "wrong" ? "bg-wordle-wrong" : ""} 
        ${props.state === "wrong-pos" ? "bg-wordle-yellow" : ""} 
        ${props.state === "default" ? "bg-wordle-btn" : ""} 
        px-4 py-5 rounded-md text-wordle-text font-bold font-arial text-sm`}
    >
      {props.letter}
    </button>
  );
};

export default Key;
