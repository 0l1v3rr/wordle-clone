import Backspace from "./Backspace";
import Enter from "./Enter";
import Key from "./Key";
import { FC } from "react";
import { Letter } from "../App";

interface KeyboardProps {
  addLetter: (letter: string) => void;
  removeLastLetter: () => void;
  enter: () => void;
  letters: [Letter[], Letter[], Letter[]];
}

const Keyboard: FC<KeyboardProps> = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1">
        {props.letters[0].map((letter) => {
          return (
            <Key
              letter={letter.letter}
              addLetter={props.addLetter}
              state={letter.letterState}
            />
          );
        })}
      </div>

      <div className="flex gap-1 mx-auto">
        {props.letters[1].map((letter) => {
          return (
            <Key
              letter={letter.letter}
              addLetter={props.addLetter}
              state={letter.letterState}
            />
          );
        })}
      </div>

      <div className="flex gap-1">
        <Enter enter={props.enter} />
        {props.letters[2].map((letter) => {
          return (
            <Key
              letter={letter.letter}
              addLetter={props.addLetter}
              state={letter.letterState}
            />
          );
        })}
        <Backspace removeLastLetter={props.removeLastLetter} />
      </div>
    </div>
  );
};

export default Keyboard;
