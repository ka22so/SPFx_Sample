import { ActionTypes, Action } from '../actions/SPFxActionTypes';

//Action Creators to create and return Actions
export const updateTitle = (title: string): Action => ({
  type: ActionTypes.UPDATE_TITLE,
  payload: title
});

//Each AJAX request ideally has 3 actions: request, success and error.
//Actions for getLibraryItems
export const getLibraryItemsRequest = (): Action => ({
  type: ActionTypes.GET_LIBRARYITEMS_REQUEST
});
export const getLibraryItemsSuccess = (lists: string[]): Action => ({
  type: ActionTypes.GET_LIBRARYITEMS_SUCCESS,
  payload: lists
});
export const getLibraryItemsError = (error: Error): Action => ({
  type: ActionTypes.GET_LIBRARYITEMS_ERROR,
  payload: error.message
});

