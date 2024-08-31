import { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import { doc, updateDoc, arrayUnion, increment } from "firebase/firestore";
import { auth, db } from "../firebase";

const Result = ({ userChoice, computerChoice, onPlayAgain }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const hasRecordedRef = useRef(false); // Ref to track if result has been recorded

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

  useEffect(() => {
    const recordGameResult = async () => {
      const user = auth.currentUser;
      if (!user || hasRecordedRef.current) return; // Check if result is already recorded

      const userDocRef = doc(db, "users", user.uid);

      const gameResult = {
        userChoice,
        computerChoice,
        result:
          result === "user" ? "Win" : result === "computer" ? "Loss" : "Draw",
        timestamp: new Date(),
      };

      const updateData = {
        gameHistory: arrayUnion(gameResult),
      };

      if (result === "user") {
        updateData.wins = increment(1);
      } else if (result === "computer") {
        updateData.losses = increment(1);
      }

      try {
        await updateDoc(userDocRef, updateData);
        hasRecordedRef.current = true; // Mark the result as recorded
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    };

    // Ensure the result is recorded only once
    if (result && !hasRecordedRef.current) {
      recordGameResult();
    }
  }, [result, userChoice, computerChoice]); // Depend on result and choices

  const getBorderColor = (choice, player) => {
    if (result === "draw") return "border-gray-500";
    if (result === "user" && player === "user") return "border-green-500";
    if (result === "computer" && player === "computer")
      return "border-green-500";
    return "border-red-500";
  };

  return (
    <div className="sm:max-w-4xl mb-6">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={250}
          gravity={0.2}
        />
      )}

      <div className="flex flex-col justify-center items-center px-4">
        <h1 className="text-white font-bold text-4xl sm:text-7xl text-center my-6 sm:mt-40">
          RpsBattle
        </h1>
        <p className="text-white sm:text-3xl">
          Not your regular Rock Paper Scissors
        </p>
        <div className="flex flex-col sm:flex-row justify-center mt-6 sm:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
          <div>
            <button
              className={`text-3xl sm:text-4xl w-64 sm:w-40 h-40 sm:h-64 mx-2 sm:mx-6 border bg-gradient-to-r from-blue-800 to-indigo-900 rounded ${getBorderColor(
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
              className={`text-3xl sm:text-4xl w-64 sm:w-40 h-40 sm:h-64 mx-2 sm:mx-6 border bg-gradient-to-r from-blue-800 to-indigo-900 rounded ${getBorderColor(
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
