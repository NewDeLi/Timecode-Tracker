import React, { useState } from "react";
import StopWatch from "./StopWatch";
import { useStore } from "../context/appContext";
import Timer from "./Timer";

const AddTimeCodes = ({ setIsClicked }: any) => {
  const [time, setTime] = useState<number>(0);
  const [timecodesHome, setTimecodesHome] = useState<number[]>([]);
  const [timecodesGuest, setTimecodesGuest] = useState<number[]>([]);

  const { state, actions } = useStore();
  const homeTeam = state.formState.homeTeam;
  const guestTeam = state.formState.guestTeam;

  const addCurrentTime = (setTimeCodes: any) => {
    setTimeCodes((prevTimecodes: any) => [...prevTimecodes, time]);
  };

  const createfullGameobject = () => {
    return {
      homeTeam: { name: homeTeam, timecodes: timecodesHome },
      guestTeam: { name: guestTeam, timecodes: timecodesGuest },
    };
  };

  return (
    <>
      <button
        onClick={() => setIsClicked(false)}
        className="w-4 h-4 border-t-2 border-l-2 rotate-[-45deg] absolute top-11 left-4"
      ></button>
      <StopWatch time={time} setTime={setTime} />
      <div className="flex justify-center gap-10">
        <button
          className="w-full rounded p-2 my-2 bg-[#2c76ff49] shadow text-[#2c76ffd3]"
          onClick={() => addCurrentTime(setTimecodesHome)}
        >
          Add to home
        </button>
        <button
          className="w-full rounded p-2 my-2 bg-[#2c76ff49] shadow text-[#2c76ffd3]"
          onClick={() => addCurrentTime(setTimecodesGuest)}
        >
          Add to guest
        </button>
      </div>
      <div className="flex justify-evenly">
        <div>
          <h1 className="text-center">{homeTeam}</h1>
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
          <h1 className="text-center">{guestTeam}</h1>
          {timecodesGuest.length !== 0 &&
            timecodesGuest.map((timecode, index) => (
              <Timer key={index} time={timecode} />
            ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0">
        <button
          className="w-full rounded p-2 bg-[#2c76ff49] shadow text-[#2c76ffd3]"
          onClick={() => {
            const newObject = createfullGameobject();
            actions?.setTimecodesFullGame(newObject);
            setIsClicked(false);
          }}
        >
          Save Game
        </button>
      </div>
    </>
  );
};

export default AddTimeCodes;
