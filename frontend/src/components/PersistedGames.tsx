import React from "react";
import { useStore } from "../context/appContext";
import Timer from "./Timer";

const PersistedGames = () => {
  const { state } = useStore();
  const timecodesAllGames = state?.timecodesFullGame;

  return (
    <>
      <div className="py-4">
        <h1 className="text-center text-lg">
          <span className="border-b-2 border-[#2c76ffd3]">Last Games</span>
        </h1>
        {timecodesAllGames.map((game) => {
          if (game === null) {
            return;
          }
          return (
            <>
              <div className="collapse my-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title border-y-2 grid grid-cols-[45%_10%_45%] content-center justify-items-center p-0">
                  <p className="w-full text-center px-2">
                    {game.homeTeam.name}
                  </p>
                  <p className="w-full text-center">vs</p>
                  <p className="w-full text-center px-2">
                    {game.guestTeam.name}
                  </p>
                </div>
                <div className="collapse-content bg-[#2c76ffd3] text-white flex justify-evenly">
                  <ul>
                    {game.homeTeam.timecodes?.map((timecode) => {
                      return (
                        <li>
                          <Timer time={timecode} />
                        </li>
                      );
                    })}
                  </ul>
                  <div className="divider divider-horizontal"></div>
                  <ul>
                    {game.guestTeam.timecodes.map((timecode) => {
                      return (
                        <li>
                          <Timer time={timecode} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default PersistedGames;
