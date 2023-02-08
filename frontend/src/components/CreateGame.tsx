import React, { useRef, useState } from "react";
import { useStore } from "../context/appContext";

const CreateGame = ({ setIsClicked }: any) => {
  const { actions, state } = useStore();
  const formRef = useRef<HTMLFormElement | null>(null);
  const resetForm = () => {
    formRef.current?.reset();
  };

  return (
    <div className="py-4">
      <h1 className="text-center text-lg">
        <span className="border-b-2 border-[#2c76ffd3]">New Game</span>
      </h1>
      <form
        ref={formRef}
        className="flex flex-col items-center"
        onSubmit={(e) => {
          e.preventDefault();
          resetForm();
          if (state.formState.homeTeam && state.formState.guestTeam !== "") {
            setIsClicked(true);
          } else {
            alert("Please enter team names first");
          }
        }}
      >
        <div className="flex flex-col">
          <div className="flex flex-col my-2">
            <label>Home:</label>
            <input
              type="text"
              id="homeTeam"
              placeholder="Add home team name"
              className="p-2 border"
              onChange={(e) =>
                actions?.setTeamName({
                  ...state.formState,
                  homeTeam: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col my-2">
            <label>Guest:</label>
            <input
              type="text"
              id="guestTeam"
              placeholder="Add guest team name"
              className="p-2 border"
              onChange={(e) =>
                actions?.setTeamName({
                  ...state.formState,
                  guestTeam: e.target.value,
                })
              }
            />
          </div>
          <button
            type="submit"
            className="bg-[#2c76ff49] text-[#2c76ffd3] p-2 rounded my-2 shadow"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGame;


