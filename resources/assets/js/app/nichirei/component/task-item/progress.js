'use strict';

import React from 'react';
import TaskAction from '../../action/task-action';
import Line from '../../model/line';
import Task from '../../model/task';
import Content from './content';
import _ from 'lodash';

export default class Progress extends React.Component {

  static propTypes = {
    line: React.PropTypes.instanceOf(Line),
    taskDo: React.PropTypes.instanceOf(Task),
    taskDid: React.PropTypes.instanceOf(Task),
    date: React.PropTypes.string
  };

  constructor() {
    super();
    this._boundOnDidContentFix = this._onDidContentFix.bind(this);
    this._boundOnDoContentFix = this._onDoContentFix.bind(this);
  }

  render() {
    /** @type {Task} */
    const taskDo = this.props.taskDo;
    /** @type {Task} */
    const taskDid = this.props.taskDid;

    const taskDoId = `TaskItem-do-${this.props.line.id}-${this.props.date}`;
    const taskDidId = `TaskItem-did-${this.props.line.id}-${this.props.date}`;
    const taskDoContent = taskDo ? taskDo.content : '';
    const taskDidContent = taskDid ? taskDid.content : '';

    return <div className="TaskItem TaskItem-progress">
      <Content
        id={taskDidId}
        labelText="やったこと"
        content={taskDidContent}
        onFix={this._boundOnDidContentFix}
      />
      <Content
        id={taskDoId}
        labelText="やること"
        content={taskDoContent}
        onFix={this._boundOnDoContentFix}
      />
    </div>;
  }

  _onDidContentFix(content) {
    const task = new Task({
      lineId: this.props.line.id,
      date: this.props.date,
      type: Task.TYPE.DID,
      content
    });
    TaskAction.save(task);
  }

  _onDoContentFix(content) {
    const task = new Task({
      lineId: this.props.line.id,
      date: this.props.date,
      type: Task.TYPE.DO,
      content
    });
    TaskAction.save(task);
  }

}
