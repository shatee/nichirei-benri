import React from 'react';

export default class LineItem extends React.Component {

  render() {
    const line = this.props.line;

    return <li className="LineItem">
      <p className="LineItem-name">{line.name}</p>
    </li>;
  }
}
