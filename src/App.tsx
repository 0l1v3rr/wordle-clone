import Keyboard from "./components/Keyboard";
import TileGrid from "./components/TileGrid";

const App = () => {
  return (
    <div
      className="bg-wordle-bg min-h-screen w-full flex flex-col px-10 
        py-4 items-center gap-10 justify-center"
    >
      <TileGrid />
      <Keyboard />
    </div>
  );
};

export default App;
