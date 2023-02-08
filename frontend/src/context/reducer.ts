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
    case ActionTypes.SET_TIMECODES_FULL_GAME:{
      if(typeof window !== "undefined"){
        localStorage.setItem("timecodes_full_game", JSON.stringify(action.payload))
      }
      return{
        ...state, 
        timecodesFullGame:[...state.timecodesFullGame, action.payload]
      }
    }  
  }
};
