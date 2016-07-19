'use strict';

import React from 'react';
import TaskAction from '../../action/task-action';
import Line from '../../model/line';
import Task from '../../model/task';
import _ from 'lodash';

export default class Progress extends React.Component {

  static propTypes = {
    line: React.PropTypes.instanceOf(Line),
    taskDo: React.PropTypes.instanceOf(Task),
    taskDid: React.PropTypes.instanceOf(Task),
    date: React.PropTypes.string
  };

  /**
   * やることハンドラー
   * @type {Function|null}
   */
  _boundOnDoContentChange = null;

  /**
   * やったことハンドラー
   * @type {Function|null}
   */
  _boundOnDidContentChange = null;

  constructor() {
    super();
    this._boundOnDoContentChange = _.debounce(this._onDoContentChange.bind(this), 1000);
    this._boundOnDidContentChange = _.debounce(this._onDidContentChange.bind(this), 1000);
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

    return <div className="TaskItem">
      <label className="TaskItem-label" htmlFor={taskDidId}>やったこと</label>
      <textarea
        id={taskDidId}
        className="TaskItem-content-did"
        onChange={this._boundOnDidContentChange}
        defaultValue={taskDidContent}
      />
      <label className="TaskItem-label" htmlFor={taskDoId}>やること</label>
      <textarea
        id={taskDoId}
        className="TaskItem-content-do"
        onChange={this._boundOnDoContentChange}
        defaultValue={taskDoContent}
      />
    </div>;
  }

  _onDoContentChange(e) {
    const task = new Task({
      lineId: this.props.line.id,
      date: this.props.date,
      type: Task.TYPE.DO,
      content: e.target.value
    });
    TaskAction.save(task);
  }

  _onDidContentChange(e) {
    const task = new Task({
      lineId: this.props.line.id,
      date: this.props.date,
      type: Task.TYPE.DID,
      content: e.target.value
    });
    TaskAction.save(task);
  }

}
