import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { State, ISPFxProps } from '../state/SPFxState';
import App from '../components/SpFxSampleGetLibraryItemsByRest';
import * as Actions from '../actions/SPFxActionCreators';
import { SPHttpClient } from '@microsoft/sp-http';

import { getLibraryItems } from '../api/getLibraryItems';

export interface IConnectedState {
  title: string;
  listItems: any[];
}
export interface IConnectedDispatch {
  updateTitle: (title: string) => void;
  getLibraryItems: (spHttpClient: SPHttpClient, currentWebUrl: string, libraryName: string) => void;
}
export type ISPFxType = ISPFxProps & IConnectedDispatch & IConnectedState;

//Map the application state to the properties of the Components. Making them available in this.props inside the component.
export function mapStateToProps(state: State, ownProps: ISPFxProps): IConnectedState {
  return {
    title: state.title,
    listItems: state.listItems
  };
}

//Map the actions to the properties of the Component. Making them available in this.props inside the component.
export const mapDispatchToProps = (dispatch: Dispatch<State>): IConnectedDispatch => ({
  updateTitle: (title: string) => {
    dispatch(Actions.updateTitle(title));
  },
  getLibraryItems: (spHttpClient: SPHttpClient, currentWebUrl: string, libraryName: string) => {
    dispatch(getLibraryItems(spHttpClient, currentWebUrl, libraryName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
