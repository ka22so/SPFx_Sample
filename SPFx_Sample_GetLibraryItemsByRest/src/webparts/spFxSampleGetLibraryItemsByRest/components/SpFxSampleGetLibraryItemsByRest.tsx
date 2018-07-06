import * as React from 'react';
import styles from './SpFxSampleGetLibraryItemsByRest.module.scss';
import { ISPFxType } from '../containers/SPFxContainer';
import { escape } from '@microsoft/sp-lodash-subset';

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
            <div>
              <p className={ styles.description }>Input title : {escape(this.props.title)}</p>
              <input type="text" value={this.props.title} onChange={this.handleChange.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private handleChange(event: React.FormEvent<HTMLInputElement>){
    this.props.updateTitle(event.currentTarget.value);
  }
}
