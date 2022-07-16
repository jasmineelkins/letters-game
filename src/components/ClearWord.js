import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function ClearWord({ selectedTiles, setSelectedTiles }) {
  const buttonStyle = selectedTiles === [] ? "" : "disabled";

  function handleClick() {
    // window.location.reload();
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
