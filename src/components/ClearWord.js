import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function ClearWord({ selectedTiles, setSelectedTiles }) {
  const buttonStyle = selectedTiles[0] ? "" : "disabled";

  function handleClick() {
    setSelectedTiles([]);
  }
  return (
    <div className="clearContainer">
      <span>clear word</span>
      <button
        className={buttonStyle}
        style={{ color: "white" }}
        onClick={() => handleClick()}
      >
        <AiOutlineClose />
      </button>
    </div>
  );
}

export default ClearWord;
