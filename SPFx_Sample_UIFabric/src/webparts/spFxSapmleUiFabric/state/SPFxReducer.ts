import { Action, ActionTypes } from '../actions/SPFxActionTypes';
import { State } from '../state/SPFxState';
import { Reducer } from 'redux';

const initState = new State();

//Reducer determines how the state should change after every action.
const SPFxReducer: Reducer<State> = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.UPDATE_TITLE:
      return state.setTitle(action.payload);
    case ActionTypes.GET_LIBRARYITEMS_REQUEST:
      return state;
    case ActionTypes.GET_LIBRARYITEMS_SUCCESS:
      return state.setListItems(action.payload);
    case ActionTypes.GET_LIBRARYITEMS_ERROR:
      return state;
    default: return state;
  }
};

export default SPFxReducer;
