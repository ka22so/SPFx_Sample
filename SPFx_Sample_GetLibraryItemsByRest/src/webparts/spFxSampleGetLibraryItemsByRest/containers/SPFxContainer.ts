import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { State, ISPFxProps } from '../state/SPFxState';
import App from '../components/SpFxSampleGetLibraryItemsByRest';
import * as Actions from '../actions/SPFxActionCreators';


export interface IConnectedState {
  title: string;
}
export interface IConnectedDispatch {
  updateTitle: (title: string) => void;
}
export type ISPFxType = ISPFxProps & IConnectedDispatch & IConnectedState;

//Map the application state to the properties of the Components. Making them available in this.props inside the component.
export function mapStateToProps(state: State, ownProps: ISPFxProps): IConnectedState {
  return {
    title: state.title
  };
}

//Map the actions to the properties of the Component. Making them available in this.props inside the component.
export const mapDispatchToProps = (dispatch: Dispatch<State>): IConnectedDispatch => ({
  updateTitle: (title: string) => {
    dispatch(Actions.updateTitle(title));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
