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
    <div className="text-red-500 flex flex-col items-center">
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </div>
  );
};

export default StopWatch;
