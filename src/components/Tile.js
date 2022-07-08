import React, { useState } from "react";

function Tile({ letter, setSelectedLetter, userWord, setUserWord }) {
  return (
    <div
      className="gridSquare"
      onClick={(e) => {
        setSelectedLetter(e.target.textContent);
        console.log(e.target.textContent);
        setUserWord(userWord + e.target.textContent);
      }}
    >
      {letter}
    </div>
  );
}

export default Tile;
