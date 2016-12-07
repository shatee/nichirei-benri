'use strict';

import React from 'react';
import TaskAction from '../../action/task-action';
import Line from '../../model/line';
import Task from '../../model/task';
import Content from './content';
import _ from 'lodash';

export default class Information extends React.Component {

  static propTypes = {
    line: React.PropTypes.instanceOf(Line),
    task: React.PropTypes.instanceOf(Task),
    date: React.PropTypes.string
  };

  constructor() {
    super();
    this._boundOnContentFix = this._onContentFix.bind(this);
  }

  render() {
    const task = this.props.task;

    const taskId = `TaskItem-task-${this.props.line.id}-${this.props.date}`;
    const taskContent = task ? task.content : '';
    
    return <li className="TaskItem TaskItem-information">
      <Content
        id={taskId}
        labelText="情報"
        content={taskContent}
        onFix={this._boundOnContentFix}
      />
    </li>;
  }

  _onContentFix(content) {
    const task = new Task({
      lineId: this.props.line.id,
      date: this.props.date,
      type: Task.TYPE.INFORMATION,
      content
    });
    TaskAction.save(task);
  }

}
