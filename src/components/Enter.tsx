import { FC } from "react";

interface EnterProps {
  enter: () => void;
}

const Enter: FC<EnterProps> = (props) => {
  return (
    <button
      onClick={() => props.enter()}
      className="px-3 py-5 rounded-md text-wordle-text font-bold font-arial 
      bg-wordle-btn text-[.8rem]"
    >
      ENTER
    </button>
  );
};

export default Enter;
