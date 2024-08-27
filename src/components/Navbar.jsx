import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../assets/rock-hand.svg";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

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
          <a href="/" className="text-lg font-bold text-white">
            RpsBattle.io
          </a>
        </div>
        <div>
          {user ? (
            <div>
              <Link
                to="/profile"
                href=""
                className="text-lg font-bold text-white mx-2"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="text-lg font-bold text-white mx-2"
              >
                Logout
              </button>
            </div>
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
