import { useState } from "react";
import Spinner from "./spinner";
import Result from "./Result";

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const handleChoice = (choice) => {
    setUserChoice(choice);

    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
  };

  return (
    <>
      {!userChoice ? (
        <Spinner onChoice={handleChoice} />
      ) : (
        <Result
          userChoice={userChoice}
          computerChoice={computerChoice}
          onPlayAgain={resetGame}
        />
      )}
    </>
  );
};

export default Game;
