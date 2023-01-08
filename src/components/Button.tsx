import { FC, useRef } from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: FC<ButtonProps> = ({ onClick, label }) => {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={ref}
      onClick={() => {
        onClick();
        ref.current?.blur();
      }}
      className="px-6 py-2 rounded-3xl bg-wordle-warning text-black text-sm font-bold"
    >
      {label}
    </button>
  );
};

export default Button;
