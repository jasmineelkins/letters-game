import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import board1 from "..//resources/test-board-1.json";
import board2 from "..//resources/test-board-2.json";

function GridContainer({
  setSelectedLetter,
  setUserWord,
  userWord,
  isValidWord,
  setIsValidWord,
}) {
  const [gameInPlay, setGameInPlay] = useState(false);
  const [lastSelected, setLastSelected] = useState({});

  useEffect(() => {
    console.log(userWord);
    getWord(userWord);
  }, [userWord]);

  async function getWord(word) {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const foundWordsArray = await response.json();

      console.log(foundWordsArray[0].word);
      setIsValidWord(true);
    } catch (error) {
      console.log("ERROR: ", error.message);
      setIsValidWord(false);
    }
  }

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
