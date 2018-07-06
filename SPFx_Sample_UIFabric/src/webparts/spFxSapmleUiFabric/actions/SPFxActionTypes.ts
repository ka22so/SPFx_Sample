export enum ActionTypes {
  UPDATE_TITLE,
  GET_LIBRARYITEMS_REQUEST,
  GET_LIBRARYITEMS_SUCCESS,
  GET_LIBRARYITEMS_ERROR
}

export type Action =
  { type: ActionTypes.UPDATE_TITLE, payload: string } |
  { type: ActionTypes.GET_LIBRARYITEMS_REQUEST } |
  { type: ActionTypes.GET_LIBRARYITEMS_SUCCESS, payload: string[] } |
  { type: ActionTypes.GET_LIBRARYITEMS_ERROR, payload: string };
