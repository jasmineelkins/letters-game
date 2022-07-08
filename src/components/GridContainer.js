import React, { useState } from "react";
import Tile from "./Tile";

function GridContainer({ setSelectedLetter, setUserWord, userWord }) {
  const lettersArray = [
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
  ];

  // create 16 grid squares
  const gridSquares = lettersArray.map((letter, index) => (
    <Tile
      key={index}
      setSelectedLetter={setSelectedLetter}
      userWord={userWord}
      setUserWord={setUserWord}
      letter={letter}
    />
  ));

  return <div className="gridContainer">{gridSquares}</div>;
}

export default GridContainer;
