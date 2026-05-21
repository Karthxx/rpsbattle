import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthProvider } from "./components/AuthContext";
import Profile from "./pages/Profile";
import { Helmet } from "react-helmet";
function App() {
  return (
    <AuthProvider>
      <Helmet>
        <title>
          Play Rock Paper Scissors Online at rpsbattle.io | Free Game
        </title>
        <meta
          name="description"
          content="Play the classic Rock Paper Scissors game online at rpsbattle.io. Challenge the computer and see if you can win!"
        />
        <link rel="canonical" href="https://www.rpsbattle.io/" />
      </Helmet>
      <Router>
        <div className="bg-gradient-to-r from-blue-800 to-indigo-900">
          <Navbar />

          <section className="sm:h-screen flex justify-center border-t border-t-white border-b border-b-white">
            <Routes>
              <Route path="/" element={<Game />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </section>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
