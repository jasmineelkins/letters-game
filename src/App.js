import React, { useState } from "react";
import GridContainer from "./components/GridContainer";
import NewGame from "./components/NewGame";
import ClearWord from "./components/ClearWord";
import TextOutput from "./components/TextOutput";

function App() {
  const [userWord, setUserWord] = useState("");
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
          userWord={userWord}
          setUserWord={setUserWord}
          isValidWord={isValidWord}
          setIsValidWord={setIsValidWord}
          currentBoard={currentBoard}
        />
        <div className="buttonsDiv item2">
          <ClearWord userWord={userWord} setUserWord={setUserWord} />
          <NewGame
            setCurrentBoard={setCurrentBoard}
            setUserWord={setUserWord}
          />
        </div>

        <TextOutput userWord={userWord} isValidWord={isValidWord} />
      </div>
    </div>
  );
}

export default App;
