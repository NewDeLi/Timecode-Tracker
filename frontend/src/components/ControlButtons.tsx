import React from "react";

interface Props {
  handleStart: () => void;
  handleReset: () => void;
  handlePauseResume: () => void;
  isPaused: boolean;
  active: boolean;
}

const ControlButtons: React.FC<Props> = ({
  handleStart,
  handleReset,
  handlePauseResume,
  isPaused,
  active,
}) => {
  const StartButton = (
    <div className="" onClick={handleStart}>
      Start
    </div>
  );
  const ActiveButtons = (
    <div className="">
      <div className="" onClick={handleReset}>
        Reset
      </div>
      <div className="" onClick={handlePauseResume}>
        {isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );

  return (
    <div className="">
      <div>{active ? ActiveButtons : StartButton}</div>
    </div>
  );
};

export default ControlButtons;
