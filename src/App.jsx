import Game from "./Game";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900">
        <Navbar />
        <section className="h-screen flex justify-center border-t border-t-white border-b border-b-white">
          <Game />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
