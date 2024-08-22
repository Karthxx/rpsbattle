const Spinner = ({ onChoice }) => {
  return (
    <div className="h-screen flex justify-center bg-gradient-to-r from-blue-800 to-indigo-900 border-t border-t-white border-b border-b-white">
      <div className="flex flex-col justify-center items-center px-4">
        <div className="flex justify-center">
          <h1 className="text-white font-bold text-4xl sm:text-7xl text-center">
            Rock Paper Scissors
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-center mt-6 sm:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
          <div>
            <button
              onClick={() => onChoice("rock")}
              className="text-3xl sm:text-4xl w-64 sm:w-40 h-40 sm:h-64 mx-2 sm:mx-6 border bg-gradient-to-r from-blue-800 to-indigo-900 rounded sm:hover:text-6xl"
            >
              ✊🏽
            </button>
          </div>
          <div>
            <button
              onClick={() => onChoice("paper")}
              className="text-3xl sm:text-4xl w-64 sm:w-40 h-40 sm:h-64 mx-2 sm:mx-6 border bg-gradient-to-r from-blue-800 to-indigo-900 rounded sm:hover:text-6xl"
            >
              🖐🏽
            </button>
          </div>
          <div>
            <button
              onClick={() => onChoice("scissors")}
              className="text-3xl sm:text-4xl w-64 sm:w-40 h-40 sm:h-64 mx-2 sm:mx-6 border bg-gradient-to-r from-blue-800 to-indigo-900 rounded sm:hover:text-6xl"
            >
              ✌🏽
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
