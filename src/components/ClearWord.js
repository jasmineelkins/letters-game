import React, { useState } from "react";

function ClearWord({ userWord, setUserWord, setWordSubmitted }) {
  const buttonStyle = userWord ? "" : "disabled";

  function handleClick() {
    setUserWord("");
    setWordSubmitted(false);
  }
  return (
    <div className="clearContainer">
      <span>clear word</span>
      <button
        class={buttonStyle}
        style={{ color: "white" }}
        onClick={() => handleClick()}
      >
        X
      </button>
    </div>
  );
}

export default ClearWord;
