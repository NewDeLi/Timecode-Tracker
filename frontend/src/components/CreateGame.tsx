import React, { useRef, useState } from "react";
import { useStore } from "../context/appContext";

const CreateGame = ({ setIsClicked }: any) => {
  const { actions, state } = useStore();
  const formRef = useRef<HTMLFormElement | null>(null);
  const resetForm = () => {
    formRef.current?.reset();
  };

  return (
    <div>
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
              className="p-2"
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
              placeholder="Add guest team name"
              className="p-2"
              onChange={(e) =>
                actions?.setTeamName({
                  ...state.formState,
                  guestTeam: e.target.value,
                })
              }
            />
          </div>
          <button type="submit" className="bg-green-500 text-white p-2 rounded my-2">
            Start new Game
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGame;
