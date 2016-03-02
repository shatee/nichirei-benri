import React from 'react';
import LineItem from './line-item';

export default class LineList extends React.Component {

  render() {
    const items = this.props.lines.map(line => {
      return <LineItem line={line} key={line.id} />;
    });

    return <ul className="LineList">
      {items}
    </ul>;
  }
}
