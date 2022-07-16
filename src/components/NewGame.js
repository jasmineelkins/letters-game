import React from "react";
import { IoMdRefresh } from "react-icons/io";
import randomBoard from "../resources/randomBoard";

function NewGame({ setCurrentBoard, setSelectedTiles }) {
  function handleClick() {
    const newLetters = randomBoard.map((obj) => {
      const lettersArray = obj.letters;
      const letter = getRandomLetter(lettersArray);
      return letter;
    });

    setSelectedTiles([]);
    setCurrentBoard(newLetters);
  }

  function getRandomLetter(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  return (
    <div className="newGameContainer item4">
      <span>new game</span>
      <button style={{ color: "white" }} onClick={() => handleClick()}>
        <IoMdRefresh />
      </button>
    </div>
  );
}

export default NewGame;
