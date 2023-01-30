export interface AppState {
  formState: { homeTeam: string; guestTeam: string };
  time: number;
}

export enum ActionTypes {
  SET_TEAM_NAME = "APP/SET_TEAM_NAME",
  SET_TIME = "APP/SET_TIME",
}

export interface SetTeamNameAction {
  type: ActionTypes.SET_TEAM_NAME;
  payload: { homeTeam: string; guestTeam: string };
}

export interface SetTimeAction {
  type: ActionTypes.SET_TIME;
  payload: number;
}

export type AppContextActions = SetTeamNameAction | SetTimeAction;
