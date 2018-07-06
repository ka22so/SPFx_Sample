import { Action, ActionTypes } from '../actions/SPFxActionTypes';
import { State } from '../state/SPFxState';
import { Reducer } from 'redux';

const initState = new State();

//Reducer determines how the state should change after every action.
const SPFxReducer: Reducer<State> = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.UPDATE_TITLE:
      return state.setTitle(action.payload);
    default: return state;
  }
};

export default SPFxReducer;
