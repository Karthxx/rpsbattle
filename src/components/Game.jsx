import { useState } from "react";
import Spinner from "./Spinner";
import Result from "./Result";

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const handleChoice = (choice) => {
    setUserChoice(choice);

    const choices = ["rock", "paper", "scissors"];
    if (choice === "mystery") {
      const mysteryChoice = choices[Math.floor(Math.random() * choices.length)];
      setUserChoice(mysteryChoice);
    }
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
  };

  const getWinner = () => {
    const rules = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (userChoice === computerChoice) return "draw";
    if (rules[userChoice] === computerChoice) return "user";
    return "computer";
  };

  const result = getWinner();

  return (
    <>
      {!userChoice ? (
        <Spinner onChoice={handleChoice} />
      ) : (
        <Result
          userChoice={userChoice}
          computerChoice={computerChoice}
          result={result}
          onPlayAgain={resetGame}
        />
      )}
    </>
  );
};

export default Game;
