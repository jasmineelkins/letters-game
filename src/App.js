import React, { useState } from "react";
import GridContainer from "./components/GridContainer";
import ClearWord from "./components/ClearWord";
import TextOutput from "./components/TextOutput";

function App() {
  const [selectedLetter, setSelectedLetter] = useState("");
  const [userWord, setUserWord] = useState("");
  const [wordSubmitted, setWordSubmitted] = useState(false);

  return (
    <div className="pageContainer">
      <GridContainer
        setSelectedLetter={setSelectedLetter}
        userWord={userWord}
        setUserWord={setUserWord}
      />

      <div className="rightColumn">
        <ClearWord
          userWord={userWord}
          setUserWord={setUserWord}
          setWordSubmitted={setWordSubmitted}
        />
        <TextOutput
          selectedLetter={selectedLetter}
          userWord={userWord}
          setUserWord={setUserWord}
          wordSubmitted={wordSubmitted}
          setWordSubmitted={setWordSubmitted}
        />
      </div>
    </div>
  );
}

export default App;
