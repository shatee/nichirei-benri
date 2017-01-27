import React from 'react';
import LineItem from './line-item';
import Line from '../model/line';

export default class LineList extends React.Component {

  static propTypes = {
    lines: React.PropTypes.arrayOf(Line)
  };
  
  render() {
    const items = this.props.lines.map((line) => {
      return <LineItem line={line} key={line.id}/>;
    });

    return <ul className="LineList">
      {items}
    </ul>;
  }
}
