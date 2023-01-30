import React from "react";
import { useStore } from "../context/appContext";

const Timer = ({ time }: any) => {
  /*   const { state } = useStore(); */
  return (
    <div className="">
      <span className="">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="">
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
      </span>
      <span className="">{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </div>
  );
};

export default Timer;
