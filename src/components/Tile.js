import React, { useState } from "react";

function Tile({
  letter,
  index,
  setSelectedLetter,
  userWord,
  setUserWord,
  isValidWord,
  lastSelected,
  setLastSelected,
  gameInPlay,
  setGameInPlay,
}) {
  const [isSelected, setIsSelected] = useState(false);

  const x = index % 4;
  const y = Math.floor(index / 4);

  function determineIfValidTile(x, y) {
    if (gameInPlay === false) {
      return true;
    } else if (gameInPlay === true) {
      if (
        Math.abs(x - lastSelected.x) <= 1 &&
        Math.abs(y - lastSelected.y) <= 1
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  const isValid = determineIfValidTile(x, y);

  let tileStyle;

  if (isSelected === false && isValid) {
    tileStyle = "gridSquare selectable";
  } else if (isSelected === false && isValid === false) {
    tileStyle = "gridSquare notSelectable";
  } else if (isSelected && isValidWord) {
    tileStyle = "gridSquare selected valid";
  } else if (isSelected && !isValidWord) {
    tileStyle = "gridSquare selected invalid";
  } else {
    tileStyle = "gridSquare";
  }

  function handleSelectedTile(e) {
    setGameInPlay(true);
    setIsSelected(true);
    setSelectedLetter(e.target.textContent);
    setUserWord(userWord + e.target.textContent);
    setLastSelected();
    setLastSelected({ index: index, x: x, y: y });
  }
  return (
    <div
      className={tileStyle}
      onClick={
        isValid
          ? (e) => {
              handleSelectedTile(e);
            }
          : null
      }
    >
      {letter}
    </div>
  );
}

export default Tile;
