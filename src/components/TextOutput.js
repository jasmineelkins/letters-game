import Reacts from "react";

function TextOutput({ selectedLetter, userWord, setUserWord }) {
  function checkIfValid(e) {
    e.preventDefault();
    console.log(userWord);

    // check if word is valid

    setUserWord("");
  }
  return (
    <div className="outputContainer">
      <form onSubmit={(e) => checkIfValid(e)}>
        <input value={userWord}></input>
      </form>
    </div>
  );
}

export default TextOutput;
