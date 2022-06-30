import React, { useState } from "react";
import GridContainer from "./components/GridContainer";
import ClearWord from "./components/ClearWord";
import TextOutput from "./components/TextOutput";

function App() {
  const [selectedLetter, setSelectedLetter] = useState("");
  const [userWord, setUserWord] = useState("");

  return (
    <div className="pageContainer">
      <GridContainer
        setSelectedLetter={setSelectedLetter}
        userWord={userWord}
        setUserWord={setUserWord}
      />

      <div className="rightColumn">
        <ClearWord setUserWord={setUserWord} />
        <TextOutput selectedLetter={selectedLetter} userWord={userWord} />
      </div>
    </div>
  );
}

export default App;
