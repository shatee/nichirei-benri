import React from 'react';
import TaskRow from './task-row';

export default class TaskList extends React.Component {

  render() {
    const rows = this.props.lines.map(line => {
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
