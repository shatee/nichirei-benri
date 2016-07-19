import React from 'react';
import TaskRow from './task-row';
import Line from '../model/line';
import Task from '../model/task';

export default class TaskList extends React.Component {

  static propTypes = {
    lines: React.PropTypes.arrayOf(Line),
    tasks: React.PropTypes.arrayOf(Task),
    dates: React.PropTypes.arrayOf(React.PropTypes.string),
    today: React.PropTypes.string,
    yesterday: React.PropTypes.string
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
