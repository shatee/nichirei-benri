import React from 'react';

export default class LineItem extends React.Component {

  render() {
    const line = this.props.line;

    const icon = line.icon_url ? <img className="LineItem-icon" src={line.icon_url} /> : '';

    return <li className="LineItem">
      <p className="LineItem-name">{line.name}</p>
      {icon}
    </li>;
  }
}
