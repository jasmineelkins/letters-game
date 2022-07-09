import React, { useState, useEffect } from "react";

function Tile({
  letter,
  setSelectedLetter,
  userWord,
  setUserWord,
  isValidWord,
}) {
  const [isSelected, setIsSelected] = useState(false);
  const [isValid, setIsValid] = useState(true); // is tile valid to be selected?

  let tileStyle;

  if (isSelected && isValidWord) {
    tileStyle = "gridSquare selected valid";
  } else if (isSelected && !isValidWord) {
    tileStyle = "gridSquare selected invalid";
  } else {
    tileStyle = "gridSquare";
  }

  function handleSelectedTile(e) {
    setSelectedLetter(e.target.textContent);
    console.log(e.target.textContent);
    setUserWord(userWord + e.target.textContent);
    setIsSelected(true);
  }

  return (
    <div
      className={tileStyle}
      onClick={(e) => {
        handleSelectedTile(e);
      }}
    >
      {letter}
    </div>
  );
}

export default Tile;
