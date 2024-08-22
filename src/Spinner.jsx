const Spinner = ({ onChoice }) => {
  return (
    <div className="h-screen flex justify-center bg-gradient-to-r from-blue-800 to-indigo-900">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <h1 className="text-white font-bold text-7xl">RpsBattle.io</h1>
        </div>
        <div className="flex justify-center mt-10 w-40 h-64">
          <div>
            <button
              onClick={() => onChoice("rock")}
              className="text-4xl w-40 h-64 mx-6 border bg-gradient-to-r from-blue-800 to-indigo-900 rounded hover:text-6xl"
            >
              ✊🏽
            </button>
          </div>
          <div>
            <button
              onClick={() => onChoice("paper")}
              className="text-4xl w-40 h-64 mx-6 border rounded bg-gradient-to-r from-blue-800 to-indigo-900 hover:text-6xl"
            >
              🖐🏽
            </button>
          </div>
          <div>
            <button
              onClick={() => onChoice("scissors")}
              className="text-4xl w-40 h-64 mx-6 border bg-gradient-to-r from-blue-800 to-indigo-900 rounded hover:text-6xl"
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
