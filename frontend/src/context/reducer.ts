import { ActionTypes, AppContextActions, AppState } from "./interfaces";

export const AppReducer = (state: AppState, action: AppContextActions) => {
  switch (action.type) {
    case ActionTypes.SET_TEAM_NAME:
      return {
        ...state,
        formState: action.payload,
      };
    case ActionTypes.SET_TIME:
      return {
        ...state,
        time: action.payload,
      };
  }
};
