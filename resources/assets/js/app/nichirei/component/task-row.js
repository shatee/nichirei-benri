import React from 'react';
import PropTypes from 'prop-types';
import Progress from './task-item/progress';
import Information from './task-item/information';
import Line from '../model/line';
import Task from '../model/task';

export default class TaskRow extends React.Component {

  static propTypes = {
    dates: PropTypes.arrayOf(PropTypes.string),
    line: PropTypes.instanceOf(Line),
    tasks: PropTypes.arrayOf(Task)
  };

  render() {
    const items = this.props.dates.map((date) => this._createTaskItem(date));

    return <li className="TaskRow">
      <ul>
        {items}
      </ul>
    </li>;
  }
  
  _createTaskItem(date) {
    const dateDate = (new Date(date)).getDate();
    
    let taskDo;
    let taskDid;
    let taskInformation;
    for (let task of this.props.tasks) {
      if (task.lineId !== this.props.line.id) {
        continue;
      }
      if ((new Date(task.date)).getDate() !== dateDate) {
        continue;
      }
      switch(task.type) {
        case Task.TYPE.DO:
          taskDo = task;
          break;
        case Task.TYPE.DID:
          taskDid = task;
          break;
        case Task.TYPE.INFORMATION:
          taskInformation = task;
      }
    }

    const key = `${this.props.line.id}:${date}`;

    switch (this.props.line.type) {
      case Line.TYPE.PROGRESS:
        return <Progress
          line={this.props.line}
          taskDo={taskDo}
          taskDid={taskDid}
          date={date}
          key={key}
        />;
      case Line.TYPE.INFORMATION:
        return <Information
          line={this.props.line}
          task={taskInformation}
          date={date}
          key={key}
        />;
      default:
        return null;
    }
  }
}
