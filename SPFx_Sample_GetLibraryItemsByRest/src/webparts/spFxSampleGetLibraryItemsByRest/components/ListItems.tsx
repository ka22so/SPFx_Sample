import * as React from 'react';

export default class ListItems extends React.Component<any, any> {

  constructor(props: {}) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <ul>
        <li>ListItemsCount : {this.props.listItems.length}</li>
        {this.props.listItems.map(listItem => {
          return <li>{listItem.BaseName}</li>;
        })}
      </ul>
    );
  }
}

