import * as Immutable from 'immutable';
import { Store } from 'redux';
import { SPHttpClient } from '@microsoft/sp-http';

export interface ISPFxProps {
  store: Store<State>;
  description: string;
  spHttpClient: SPHttpClient;
  currentWebUrl: string;
  displayName: string;
  loginName: string;
}

export interface IState {
  title: string;
  listItems: any[];
}

export const initialState: IState = {
  title: "Documents",
  listItems: []
};

//Immutable State.
export class State extends Immutable.Record(initialState) implements IState {

  //Getters
  public readonly title: string;
  public readonly listItems: any[];

  //Setters
  public setTitle(newTitle: string): State {
    return this.set("title", newTitle) as State;
  }

  public setListItems(items: any[]): State {
    return this.set("listItems", items) as State;
  }
}
