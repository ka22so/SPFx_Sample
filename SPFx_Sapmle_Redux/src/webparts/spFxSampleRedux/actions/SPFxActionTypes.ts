export enum ActionTypes {
  UPDATE_TITLE
}

export type Action =
  { type: ActionTypes.UPDATE_TITLE, payload: string };
