import React from 'react';
import PropTypes from 'prop-types';
import Line from '../model/line';

export default class LineItem extends React.Component {

  static propTypes = {
    line: PropTypes.instanceOf(Line)
  };
  
  render() {
    const line = this.props.line;

    const icon = line.iconUrl ? <img className="LineItem-icon" src={line.iconUrl} /> : '';
    const taskListUrl = `/line/${line.id}/tasks`;

    return <li className="LineItem">
      <p className="LineItem-name">{line.name}</p>
      {icon}
      <a className="LineItem-tasksLink" href={taskListUrl}>すべてのタスク</a>
    </li>;
  }
}
