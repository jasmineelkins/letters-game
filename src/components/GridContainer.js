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
  const [gameInPlay, setGameInPlay] = useState(false);
  const [lastSelected, setLastSelected] = useState({});

  useEffect(() => {
    // check if word is valid
    if (validWords.includes(userWord.toLowerCase())) {
      console.log("valid word: ", userWord);
      setIsValidWord(true);
    } else {
      console.log("invalid word: ", userWord);
      setIsValidWord(false);
    }
  }, [userWord, validWords, setIsValidWord]);

  const gridSquares = board2.board.map((letter, index) => (
    <Tile
      key={index}
      index={index}
      letter={letter}
      setSelectedLetter={setSelectedLetter}
      userWord={userWord}
      setUserWord={setUserWord}
      isValidWord={isValidWord}
      lastSelected={lastSelected}
      setLastSelected={setLastSelected}
      gameInPlay={gameInPlay}
      setGameInPlay={setGameInPlay}
    />
  ));

  return <div className="gridContainer item1">{gridSquares}</div>;
}

export default GridContainer;
