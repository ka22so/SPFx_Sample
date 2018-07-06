import * as React from 'react';
import styles from './SpFxSampleGetLibraryItemsByRest.module.scss';
import { ISPFxType } from '../containers/SPFxContainer';
import { escape } from '@microsoft/sp-lodash-subset';

import ListItems from './ListItems';

export default class SpFxSampleGetLibraryItemsByRest extends React.Component<ISPFxType, {}> {
  public render(): React.ReactElement<ISPFxType> {
    return (
      <div className={ styles.spFxSampleGetLibraryItemsByRest }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>{escape(this.props.displayName)} {escape(this.props.loginName)}</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <p className={ styles.description }>Input LibraryName : {escape(this.props.title)}</p>
              <input type="text" value={this.props.title} onChange={this.handleChange.bind(this)} />
              <p>
                <a className={ styles.button } onClick={this.handleClick.bind(this)}>
                  <span className={ styles.label }>Get Library Items</span>
                </a>
              </p>
              <p>
              <ListItems listItems={this.props.listItems} />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  private handleClick(event: React.FormEvent<HTMLInputElement>){
    this.props.getLibraryItems(this.props.spHttpClient, this.props.currentWebUrl, this.props.title);
  }

  private handleChange(event: React.FormEvent<HTMLInputElement>){
    this.props.updateTitle(event.currentTarget.value);
  }

  private componentDidMount() {
    this.props.getLibraryItems(this.props.spHttpClient, this.props.currentWebUrl, this.props.title);
  }
}
