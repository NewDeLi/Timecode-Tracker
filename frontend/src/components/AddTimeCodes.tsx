import React, { useState } from "react";
import StopWatch from "./StopWatch";
import { useStore } from "../context/appContext";
import Timer from "./Timer";

const AddTimeCodes = ({ setIsClicked }: any) => {
  const [time, setTime] = useState<number>(0);
  const [timecodesHome, setTimecodesHome] = useState<number[]>([]);
  const [timecodesGuest, setTimecodesGuest] = useState<number[]>([]);

  const { state } = useStore();
  const homeTeam = state.formState.homeTeam;
  const guestTeam = state.formState.guestTeam;

  const addCurrentTime = (setTimeCodes: any) => {
    setTimeCodes((prevTimecodes: any) => [...prevTimecodes, time]);
  };

  return (
    <>
      <button onClick={() => setIsClicked(false)}>+ new game</button>
      <StopWatch time={time} setTime={setTime} />
      <div className="flex justify-center gap-10">
        <button
          className="w-full rounded p-2 bg-green-500 text-white"
          onClick={() => addCurrentTime(setTimecodesHome)}
        >
          Add Timecode to
          <br /> {homeTeam}
        </button>
        <button
          className="w-full rounded p-2 bg-green-500 text-white"
          onClick={() => addCurrentTime(setTimecodesGuest)}
        >
          Add Timecode to
          <br /> {guestTeam}
        </button>
      </div>
      <div className="flex justify-evenly">
        <div>
          <h1 className="text-center">Home</h1>
          <ul>
            {timecodesHome.length !== 0 &&
              timecodesHome.map((timecode, index) => (
                <li key={index}>
                  <Timer time={timecode} />
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h1 className="text-center">Guest</h1>
          {timecodesGuest.length !== 0 &&
            timecodesGuest.map((timecode, index) => (
              <Timer key={index} time={timecode} />
            ))}
        </div>
      </div>
    </>
  );
};

export default AddTimeCodes;
