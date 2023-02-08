import React, { useState } from "react";
import AddTimeCodes from "./components/AddTimeCodes";
import CreateGame from "./components/CreateGame";
import PersistedGames from "./components/PersistedGames";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className=" text-[#333333] h-screen">
      <h1 className="text-center text-3xl bg-[#2c76ffd3] text-white p-8 mb-4 shadow">
        Timecode Tracker
      </h1>
      {!isClicked ? (
        <>
          <CreateGame setIsClicked={setIsClicked} />
          <PersistedGames />
        </>
      ) : (
        <AddTimeCodes setIsClicked={setIsClicked} />
      )}
    </div>
  );
}

export default App;
