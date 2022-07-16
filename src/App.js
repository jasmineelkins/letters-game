import React, { useState } from "react";
import GridContainer from "./components/GridContainer";
import NewGame from "./components/NewGame";
import ClearWord from "./components/ClearWord";
import TextOutput from "./components/TextOutput";

function App() {
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [isValidWord, setIsValidWord] = useState(false);

  const [currentBoard, setCurrentBoard] = useState([
    "L",
    "I",
    "S",
    "T",
    "O",
    "F",
    "A",
    "T",
    "S",
    "T",
    "R",
    "S",
    "O",
    "R",
    "A",
    "Y",
  ]);

  return (
    <div className="contentWrapper">
      <div className="pageContainer">
        <GridContainer
          isValidWord={isValidWord}
          setIsValidWord={setIsValidWord}
          currentBoard={currentBoard}
          selectedTiles={selectedTiles}
          setSelectedTiles={setSelectedTiles}
        />
        <div className="buttonsDiv item2">
          <ClearWord
            selectedTiles={selectedTiles}
            setSelectedTiles={setSelectedTiles}
          />
          <NewGame
            setCurrentBoard={setCurrentBoard}
            selectedTiles={selectedTiles}
            setSelectedTiles={setSelectedTiles}
          />
        </div>

        <TextOutput selectedTiles={selectedTiles} isValidWord={isValidWord} />
      </div>
    </div>
  );
}

export default App;
