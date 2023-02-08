import React from "react";
import { ActionTypes, AppContextActions } from "./interfaces";

export const AppActions = (dispatch: React.Dispatch<AppContextActions>) => ({
  setTeamName: (payload: { homeTeam: string; guestTeam: string }) => {
    dispatch({
      type: ActionTypes.SET_TEAM_NAME,
      payload,
    });
  },
  setTime: (payload: number) => {
    dispatch({
      type: ActionTypes.SET_TIME,
      payload,
    });
  },
    setTimecodesFullGame:(payload: {homeTeam:{name:string, timecodes:number[]}, guestTeam:{name:string, timecodes:number[]}})=>{
      dispatch({
        type: ActionTypes.SET_TIMECODES_FULL_GAME,
        payload
      })
    }
});
