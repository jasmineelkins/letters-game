import React from "react";

function TextOutput({ selectedTiles, isValidWord }) {
  const currentWord = selectedTiles.map((tile) => tile.letter).join("");
  const validTextDisplay = isValidWord === false ? "invalid" : "valid";

  const spanStyle = isValidWord === false ? "invalid" : "valid";

  return (
    <div className="outputContainer item3">
      <form>
        <input value={currentWord} className={spanStyle}></input>
        {currentWord === "" ? null : (
          <span className={spanStyle}>{validTextDisplay}</span>
        )}
      </form>
    </div>
  );
}

export default TextOutput;
