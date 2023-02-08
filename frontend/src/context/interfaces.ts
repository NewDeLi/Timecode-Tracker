export interface AppState {
  formState: { homeTeam: string; guestTeam: string };
  time: number;
  timecodesFullGame: {homeTeam:{name:string, timecodes:number[]}, guestTeam:{name:string, timecodes:number[]}}[] | []
}

export enum ActionTypes {
  SET_TEAM_NAME = "APP/SET_TEAM_NAME",
  SET_TIME = "APP/SET_TIME",
  SET_TIMECODES_FULL_GAME="APP/SET_TIMCODES_FULL_GAME"
}

export interface SetTeamNameAction {
  type: ActionTypes.SET_TEAM_NAME;
  payload: { homeTeam: string; guestTeam: string };
}

export interface SetTimeAction {
  type: ActionTypes.SET_TIME;
  payload: number;
}

export interface setTimecodesFullGameAction {
  type: ActionTypes.SET_TIMECODES_FULL_GAME;
  payload: {homeTeam:{name:string, timecodes:number[]}, guestTeam:{name:string, timecodes:number[]}}
}

export type AppContextActions = SetTeamNameAction | SetTimeAction |setTimecodesFullGameAction;
