import { FC } from "react";
import Button from "./Button";

interface GameOverPopupProps {
  isActive: boolean;
  close: () => void;
  currentWord: string;
  state: "lost" | "won";
}

const GameOverPopup: FC<GameOverPopupProps> = (props) => {
  return (
    <div
      className={`${
        props.isActive ? "opacity-100 scale-100" : "opacity-0 scale-50"
      } transition-all duration-150 bg-wordle-bg border border-solid 
        border-wordle-border z-10 shadow-3xl rounded-md absolute left-1/2 
        top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[50%] lg:w-[40%]`}
    >
      <div
        className="text-lg text-wordle-text font-semibold uppercase 
          text-center border-b border-solid border-wordle-border px-6 py-2"
      >
        {props.state === "won" ? "Congratulations!" : "Game Over!"}
      </div>

      <div className="text-wordle-text px-6 py-4 border-b border-solid border-wordle-border">
        {props.state === "won"
          ? "You have successfully guessed the word!"
          : "Better luck next time!"}
        <br />
        The correct word was{" "}
        <span className="font-semibold">{props.currentWord}.</span>
      </div>

      <div className="px-6 py-4">
        <Button onClick={() => props.close()} label="New Game" />
      </div>
    </div>
  );
};

export default GameOverPopup;
