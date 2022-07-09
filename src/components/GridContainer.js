import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import dictionary from "../dictionary.json";
import board1 from "../test-board-1.json";
import board2 from "../test-board-2.json";

function GridContainer({
  setSelectedLetter,
  setUserWord,
  userWord,
  isValidWord,
  setIsValidWord,
}) {
  const validWords = dictionary.words;

  useEffect(() => {
    // check if word is valid
    console.log(userWord);

    if (validWords.includes(userWord.toLowerCase())) {
      console.log("valid");
      setIsValidWord(true);
    } else {
      console.log("invalid");
      setIsValidWord(false);
    }
  }, [userWord]);

  const gridSquares = board2.board.map((letter, index) => (
    <Tile
      key={index}
      letter={letter}
      setSelectedLetter={setSelectedLetter}
      userWord={userWord}
      setUserWord={setUserWord}
      isValidWord={isValidWord}
    />
  ));

  return <div className="gridContainer item1">{gridSquares}</div>;
}

export default GridContainer;
