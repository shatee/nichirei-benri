import React from 'react';
import PropTypes from 'prop-types';
import TaskRow from './task-row';
import Line from '../model/line';
import Task from '../model/task';

export default class TaskList extends React.Component {

  static propTypes = {
    lines: PropTypes.arrayOf(Line),
    tasks: PropTypes.arrayOf(Task),
    dates: PropTypes.arrayOf(PropTypes.string),
    today: PropTypes.string,
    yesterday: PropTypes.string
  };

  render() {
    const rows = this.props.lines.map((line) => {
      return <TaskRow
        line={line}
        dates={this.props.dates}
        tasks={this.props.tasks}
        key={line.id}
        today={this.props.today}
        yesterday={this.props.yesterday}
      />;
    });

    return <ul className="TaskList">
      {rows}
    </ul>;
  }
}
