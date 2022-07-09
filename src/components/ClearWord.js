import React, { useState } from "react";

function ClearWord({ userWord }) {
  const buttonStyle = userWord ? "" : "disabled";

  function handleClick() {
    window.location.reload();
  }
  return (
    <div className="clearContainer item2">
      <span>clear word</span>
      <button
        className={buttonStyle}
        style={{ color: "white" }}
        onClick={() => handleClick()}
      >
        X
      </button>
    </div>
  );
}

export default ClearWord;
