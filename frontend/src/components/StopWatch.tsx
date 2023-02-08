import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import ControlButtons from "./ControlButtons";
import { useStore } from "../context/appContext";

const StopWatch = ({ time, setTime }: any) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(true);

  /*  const { state, actions } = useStore(); */

  /*   const time = state.time; */

  useEffect(() => {
    let interval: any = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time: any) => time + 10);
        /*    actions?.setTime((time) => time + 10); */
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    /*   actions?.setTime(0); */
    setTime(0);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-[#2c76ffd3]  border-2 border-[#2c76ff49] rounded-full w-20 h-20   flex justify-center items-center">
          <Timer time={time} />
        </div>
        <ControlButtons
          active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
        />
      </div>
    </>
  );
};

export default StopWatch;
