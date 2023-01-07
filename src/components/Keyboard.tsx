import Backspace from "./Backspace";
import Enter from "./Enter";
import Key from "./Key";

const Keyboard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1">
        <Key letter="Q" state="default" />
        <Key letter="W" state="wrong" />
        <Key letter="E" state="wrong-pos" />
        <Key letter="R" state="correct" />
        <Key letter="T" state="default" />
        <Key letter="Y" state="default" />
        <Key letter="U" state="default" />
        <Key letter="I" state="default" />
        <Key letter="O" state="default" />
        <Key letter="P" state="default" />
      </div>

      <div className="flex gap-1 mx-auto">
        <Key letter="A" state="default" />
        <Key letter="S" state="default" />
        <Key letter="D" state="default" />
        <Key letter="F" state="default" />
        <Key letter="G" state="default" />
        <Key letter="H" state="default" />
        <Key letter="J" state="default" />
        <Key letter="K" state="default" />
        <Key letter="L" state="default" />
      </div>

      <div className="flex gap-1">
        <Enter />
        <Key letter="Z" state="default" />
        <Key letter="X" state="default" />
        <Key letter="C" state="default" />
        <Key letter="V" state="default" />
        <Key letter="B" state="default" />
        <Key letter="N" state="default" />
        <Key letter="M" state="default" />
        <Backspace />
      </div>
    </div>
  );
};

export default Keyboard;
