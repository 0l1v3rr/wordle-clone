import Backspace from "./Backspace";
import Enter from "./Enter";
import Key from "./Key";
import { FC } from "react";

interface KeyboardProps {
  addLetter: (letter: string) => void;
  removeLastLetter: () => void;
}

const Keyboard: FC<KeyboardProps> = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1">
        <Key letter="Q" addLetter={props.addLetter} state="default" />
        <Key letter="W" addLetter={props.addLetter} state="default" />
        <Key letter="E" addLetter={props.addLetter} state="default" />
        <Key letter="R" addLetter={props.addLetter} state="default" />
        <Key letter="T" addLetter={props.addLetter} state="default" />
        <Key letter="Y" addLetter={props.addLetter} state="default" />
        <Key letter="U" addLetter={props.addLetter} state="default" />
        <Key letter="I" addLetter={props.addLetter} state="default" />
        <Key letter="O" addLetter={props.addLetter} state="default" />
        <Key letter="P" addLetter={props.addLetter} state="default" />
      </div>

      <div className="flex gap-1 mx-auto">
        <Key letter="A" addLetter={props.addLetter} state="default" />
        <Key letter="S" addLetter={props.addLetter} state="default" />
        <Key letter="D" addLetter={props.addLetter} state="default" />
        <Key letter="F" addLetter={props.addLetter} state="default" />
        <Key letter="G" addLetter={props.addLetter} state="default" />
        <Key letter="H" addLetter={props.addLetter} state="default" />
        <Key letter="J" addLetter={props.addLetter} state="default" />
        <Key letter="K" addLetter={props.addLetter} state="default" />
        <Key letter="L" addLetter={props.addLetter} state="default" />
      </div>

      <div className="flex gap-1">
        <Enter />
        <Key letter="Z" addLetter={props.addLetter} state="default" />
        <Key letter="X" addLetter={props.addLetter} state="default" />
        <Key letter="C" addLetter={props.addLetter} state="default" />
        <Key letter="V" addLetter={props.addLetter} state="default" />
        <Key letter="B" addLetter={props.addLetter} state="default" />
        <Key letter="N" addLetter={props.addLetter} state="default" />
        <Key letter="M" addLetter={props.addLetter} state="default" />
        <Backspace removeLastLetter={props.removeLastLetter} />
      </div>
    </div>
  );
};

export default Keyboard;
