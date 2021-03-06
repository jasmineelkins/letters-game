import React from "react";

function Tile({
  letter,
  index,
  isValidWord,
  lastSelected,
  setLastSelected,
  selectedTiles,
  setSelectedTiles,
}) {
  const isSelected = selectedTiles.find((tile) =>
    tile.index === index ? true : false
  );

  const x = index % 4;
  const y = Math.floor(index / 4);

  function determineIfValidTile(x, y) {
    if (!selectedTiles[0]) {
      return true;
    } else if (selectedTiles[0]) {
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
    setLastSelected({ index: index, x: x, y: y });

    setSelectedTiles([
      ...selectedTiles,
      { letter: e.target.textContent, index: index },
    ]);
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
