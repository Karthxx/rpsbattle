import { useState, useEffect } from "react";
import Confetti from "react-confetti";

const Result = ({ userChoice, computerChoice, onPlayAgain }) => {
  const [showConfetti, setShowConfetti] = useState(false);

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

  useEffect(() => {
    if (result === "user") {
      setShowConfetti(true);

      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [result]);

  const getBorderColor = (choice, player) => {
    if (result === "draw") return "border-gray-500";
    if (result === "user" && player === "user") return "border-green-500";
    if (result === "computer" && player === "computer")
      return "border-green-500";
    return "border-red-500";
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-800 to-indigo-900 relative border-t border-t-white border-b border-b-white">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={250}
          gravity={0.2}
        />
      )}

      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <h1 className="text-white font-bold text-4xl sm:text-7xl text-center">
            Rock Paper Scissors
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-center mt-6 sm:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
          <div>
            <button
              className={`text-3xl sm:text-4xl w-64 sm:w-40 h-40 sm:h-64 mx-2 sm:mx-6 border bg-gradient-to-r from-blue-800 to-indigo-900 rounded sm:hover:text-6xl ${getBorderColor(
                userChoice,
                "user"
              )}`}
            >
              {userChoice === "rock"
                ? "✊🏽"
                : userChoice === "paper"
                ? "🖐🏽"
                : "✌🏽"}
            </button>
          </div>
          <div>
            <button
              className={`text-3xl sm:text-4xl w-64 sm:w-40 h-40 sm:h-64 mx-2 sm:mx-6 border bg-gradient-to-r from-blue-800 to-indigo-900 rounded sm:hover:text-6xl ${getBorderColor(
                computerChoice,
                "computer"
              )}`}
            >
              {computerChoice === "rock"
                ? "✊🏽"
                : computerChoice === "paper"
                ? "🖐🏽"
                : "✌🏽"}
            </button>
          </div>
        </div>
        <button
          onClick={onPlayAgain}
          className="mt-10 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Result;
