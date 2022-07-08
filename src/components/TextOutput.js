import React, { useState } from "react";
import dictionary from "../dictionary.json";

function TextOutput({
  selectedLetter,
  userWord,
  setUserWord,
  wordSubmitted,
  setWordSubmitted,
}) {
  const [isValid, setIsValid] = useState(false);
  const validWords = dictionary.words;
  const validText = isValid === false ? "invalid" : "valid";

  function checkIfValid(e) {
    e.preventDefault();
    console.log(userWord);
    setWordSubmitted(true);

    // check if word is valid
    console.log(validWords);

    if (validWords.includes(userWord.toLowerCase())) {
      console.log("valid");
      setIsValid(true);
    } else {
      console.log("invalid");
      setIsValid(false);
    }
  }
  return (
    <div className="outputContainer">
      <form onSubmit={(e) => checkIfValid(e)}>
        <input value={userWord}></input>
        {wordSubmitted ? <span className="validSpan">{validText}</span> : null}
      </form>
    </div>
  );
}

export default TextOutput;
