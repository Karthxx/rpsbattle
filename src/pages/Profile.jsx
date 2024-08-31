import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Helmet } from "react-helmet";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState({});
  const [gameHistory, setGameHistory] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        const userDocRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setProfileData(data);

          // Fetch and sort the game history
          const sortedGameHistory = (data.gameHistory || [])
            .sort((a, b) => b.timestamp.toDate() - a.timestamp.toDate())
            .slice(0, 7);

          setGameHistory(sortedGameHistory);
        } else {
          console.log("No such document!");
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const getEmoji = (choice) => {
    switch (choice) {
      case "rock":
        return "✊🏽";
      case "paper":
        return "🖐🏽";
      case "scissors":
        return "✌🏽";
      default:
        return "";
    }
  };

  const getBorderColor = (result) => {
    if (result === "Win") return "border-green-500";
    if (result === "Loss") return "border-red-500";
    if (result === "Draw") return "border-gray-500";
    return "border-gray-500";
  };

  return (
    <>
      <Helmet>
        <title>Your Profile | rpsbattle.io</title>
        <meta
          name="description"
          content="View your profile and game history in the Rock Paper Scissors online game at rpsbattle.io."
        />
      </Helmet>
      <div className="profile-container max-w-lg mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Profile</h1>
        {user && (
          <>
            <p className="text-lg mb-2 text-white">
              <strong>Username:</strong> {profileData.username}
            </p>
            <p className="text-lg mb-4 text-white">
              <strong>Wins:</strong> {profileData.wins || 0} |{" "}
              <strong>Losses:</strong> {profileData.losses || 0}
            </p>

            <h2 className="text-xl font-semibold mb-2 text-white">
              Recent Games
            </h2>
            <ul className="space-y-2">
              {gameHistory.map((game, index) => (
                <li
                  key={index}
                  className={`flex items-center p-2 border-4 rounded-lg ${getBorderColor(
                    game.result
                  )}`}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center border-2 rounded-md bg-white">
                      {getEmoji(game.userChoice)}
                    </div>
                    <span className="mx-2 text-lg">vs</span>
                    <div className="w-10 h-10 flex items-center justify-center border-2 rounded-md bg-white">
                      {getEmoji(game.computerChoice)}
                    </div>
                  </div>
                  <span className="ml-4 text-lg font-semibold">
                    {game.result}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
