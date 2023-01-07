import Tile from "./Tile";

const TileGrid = () => {
  return (
    <div className="grid grid-rows-6 grid-cols-5 gap-1">
      <Tile letter="A" state="default" />
      <Tile letter="B" state="active" />
      <Tile letter="C" state="correct" />
      <Tile letter="D" state="wrong" />
      <Tile letter="E" state="wrong-pos" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
      <Tile letter="" state="default" />
    </div>
  );
};

export default TileGrid;
