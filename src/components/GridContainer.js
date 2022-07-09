import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import dictionary from "../dictionary.json";

function GridContainer({
  setSelectedLetter,
  setUserWord,
  userWord,
  isValidWord,
  setIsValidWord,
}) {
  const validWords = dictionary.words;
  const lettersArray = [
    "L",
    "I",
    "S",
    "T",
    "O",
    "F",
    "A",
    "T",
    "S",
    "T",
    "R",
    "S",
    "O",
    "R",
    "A",
    "Y",
  ];

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

  const gridSquares = lettersArray.map((letter, index) => (
    <Tile
      key={index}
      letter={letter}
      setSelectedLetter={setSelectedLetter}
      userWord={userWord}
      setUserWord={setUserWord}
      isValidWord={isValidWord}
    />
  ));

  return <div className="gridContainer">{gridSquares}</div>;
}

export default GridContainer;
