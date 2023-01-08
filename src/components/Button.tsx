import { FC } from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 rounded-3xl bg-wordle-warning text-black text-sm font-bold"
    >
      {label}
    </button>
  );
};

export default Button;
