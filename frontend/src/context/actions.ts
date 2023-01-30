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
});
