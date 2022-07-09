import React, { useState } from "react";

function TextOutput({ userWord, isValidWord }) {
  const validTextDisplay = isValidWord === false ? "invalid" : "valid";

  const spanStyle = isValidWord === false ? "invalid" : "valid";

  return (
    <div className="outputContainer">
      <form>
        <input value={userWord} className={spanStyle}></input>
        {userWord === "" ? null : (
          <span className={spanStyle}>{validTextDisplay}</span>
        )}
      </form>
    </div>
  );
}

export default TextOutput;
