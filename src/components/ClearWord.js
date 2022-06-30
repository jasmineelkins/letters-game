import React, { useState } from "react";

function ClearWord({ setUserWord }) {
  return (
    <div className="clearContainer">
      <span>clear word</span>
      <button style={{ color: "white" }} onClick={() => setUserWord("")}>
        X
      </button>
    </div>
  );
}

export default ClearWord;
