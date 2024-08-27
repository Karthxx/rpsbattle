const Spinner = ({ onChoice }) => {
  return (
    <div className="sm:max-w-4xl mb-12">
      <div className="flex flex-col justify-center items-center px-4">
        <h1 className="text-white font-bold text-4xl sm:text-7xl text-center my-6 sm:mt-40">
          RpsBattle
        </h1>
        <p className="text-white sm:text-3xl">
          Not you regular Rock Paper Scissors
        </p>
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
