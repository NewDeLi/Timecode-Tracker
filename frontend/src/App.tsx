import React, { useState } from "react";
import AddTimeCodes from "./components/AddTimeCodes";
import CreateGame from "./components/CreateGame";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className=" text-green-500">
      {!isClicked ? (
        <CreateGame setIsClicked={setIsClicked} />
      ) : (
        <AddTimeCodes setIsClicked={setIsClicked}/>
      )}
    </div>
  );
}

export default App;
