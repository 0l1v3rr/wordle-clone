import { FC } from "react";

interface EnterProps {
  enter: () => void;
}

const Enter: FC<EnterProps> = (props) => {
  return (
    <button
      onClick={() => props.enter()}
      className="px-2 py-4 rounded-md text-wordle-text font-bold font-arial 
      bg-wordle-btn text-[.75rem]"
    >
      ENTER
    </button>
  );
};

export default Enter;
