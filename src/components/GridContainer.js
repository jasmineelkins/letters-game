import React, { useState } from "react";

function GridContainer({ setSelectedLetter, setUserWord, userWord }) {
  const lettersArray = [
    "D",
    "A",
    "E",
    "B",
    "I",
    "L",
    "M",
    "O",
    "P",
    "S",
    "A",
    "E",
    "R",
    "C",
    "G",
    "W",
  ];

  // create 16 grid squares
  const gridSquares = lettersArray.map((letter, index) => (
    <div
      key={index}
      className="gridSquare"
      onClick={(e) => {
        setSelectedLetter(e.target.textContent);
        console.log(e.target.textContent);
        setUserWord(userWord + e.target.textContent);
      }}
    >
      {letter}
    </div>
  ));

  return <div className="gridContainer">{gridSquares}</div>;
}

export default GridContainer;
