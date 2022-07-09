import React, { useState } from "react";

function ClearWord({ userWord }) {
  const buttonStyle = userWord ? "" : "disabled";

  function handleClick() {
    window.location.reload();
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
