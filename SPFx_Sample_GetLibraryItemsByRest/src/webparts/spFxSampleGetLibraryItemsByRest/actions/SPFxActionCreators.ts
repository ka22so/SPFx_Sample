import { ActionTypes, Action } from '../actions/SPFxActionTypes';

//Action Creators to create and return Actions
export const updateTitle = (title: string): Action => ({
  type: ActionTypes.UPDATE_TITLE,
  payload: title
});

