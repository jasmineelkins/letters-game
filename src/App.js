import React, { useState, useEffect } from "react";
import GridContainer from "./components/GridContainer";
import ClearWord from "./components/ClearWord";
import TextOutput from "./components/TextOutput";

function App() {
  const [selectedLetter, setSelectedLetter] = useState("");
  const [userWord, setUserWord] = useState("");
  const [isValidWord, setIsValidWord] = useState(false);
  const [boardTiles, setBoardTiles] = useState([]);

  return (
    <div className="contentWrapper">
      <div className="pageContainer">
        <GridContainer
          setSelectedLetter={setSelectedLetter}
          userWord={userWord}
          setUserWord={setUserWord}
          isValidWord={isValidWord}
          setIsValidWord={setIsValidWord}
        />

        <ClearWord userWord={userWord} />
        <TextOutput userWord={userWord} isValidWord={isValidWord} />
      </div>
    </div>
  );
}

export default App;
