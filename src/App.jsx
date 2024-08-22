import Game from "./Game";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900">
        <Navbar />
        <Game />
        <Footer />
      </div>
    </>
  );
}

export default App;
