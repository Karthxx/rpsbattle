import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase"; // Ensure the path is correct
import { onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../assets/rock-hand.svg";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  };

  return (
    <div className="max-w-5xl py-4 px-1 mx-auto relative">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-row items-center">
          <img src={logo} alt="Rock Hand Logo" className="w-7" />
          <p className="text-lg font-bold text-white">RpsBattle.io</p>
        </div>
        <div>
          {user ? (
            <button
              onClick={handleLogout}
              className="text-lg font-bold text-white"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-lg font-bold text-white mx-2">
                Login
              </Link>
              <Link to="/signup" className="text-lg font-bold text-white mx-2">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
