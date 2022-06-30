import Reacts from "react";

function TextOutput({ selectedLetter, userWord }) {
  return (
    <div className="outputContainer">
      <span className="textOutput">{userWord}</span>
    </div>
  );
}

export default TextOutput;
