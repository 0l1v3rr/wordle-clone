import { Letter } from "../App";
import Tile from "./Tile";
import { FC } from "react";

interface TileGridProps {
  letters: Letter[];
}

const TileGrid: FC<TileGridProps> = (props) => {
  return (
    <div className="grid grid-rows-6 grid-cols-5 gap-1">
      {props.letters.map((letter) => (
        <Tile
          letter={letter.letter}
          state={letter.letterState}
          key={`letter-${Math.random()}-${Math.random()}`}
        />
      ))}
    </div>
  );
};

export default TileGrid;
