import React from 'react';
import TaskItem from './task-item';

export default class TaskRow extends React.Component {

  render() {
    const items = this.props.dates.map(date => {
      const key = `${this.props.line.id}:${date}`;
      return <TaskItem line={this.props.line} date={date} tasks={this.props.tasks} key={key} />;
    });

    return <li className="TaskRow">
      <ul>
        {items}
      </ul>
    </li>;
  }
}
