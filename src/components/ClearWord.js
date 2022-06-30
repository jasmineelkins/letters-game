import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

function ClearWord({ setUserWord }) {
  return (
    <div className="clearContainer">
      <span>clear word</span>
      <button style={{ color: "white" }}>X</button>
    </div>
  );
}

export default ClearWord;
