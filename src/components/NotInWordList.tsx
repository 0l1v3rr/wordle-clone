import { FC } from "react";

interface NotInWordListProps {
  isActive: boolean;
}

const NotInWordList: FC<NotInWordListProps> = (props) => {
  return (
    <div
      className={`bg-white text-black rounded-md px-3 py-3 
        font-bold text-sm absolute top-10 left-1/2 
        -translate-x-1/2 shadow-3xl pointer-events-none select-none
        ${props.isActive ? "opacity-100" : "opacity-0"}
        transition-all duration-200`}
    >
      Not in word list
    </div>
  );
};

export default NotInWordList;
