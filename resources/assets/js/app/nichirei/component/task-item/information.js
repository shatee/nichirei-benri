'use strict';

import React from 'react';
import TaskAction from '../../action/task-action';
import Line from '../../model/line';
import Task from '../../model/task';
import _ from 'lodash';

export default class Information extends React.Component {

  static propTypes = {
    line: React.PropTypes.instanceOf(Line),
    task: React.PropTypes.instanceOf(Task),
    date: React.PropTypes.string
  };

  /**
   * @type {Function|null}
   * @private
   */
  _boundOnContentChange = null;

  constructor() {
    super();
    const onContentChange = this._onContentChange.bind(this);
    const debouncedOnContentChange = _.debounce(onContentChange, 1000);
    this._boundOnContentChange = (e) => {
      e.persist();
      debouncedOnContentChange(e);
    };
  }

  render() {
    const task = this.props.task;

    const taskId = `TaskItem-task-${this.props.line.id}-${this.props.date}`;
    const taskContent = task ? task.content : '';
    
    return <li className="TaskItem">
      <label className="TaskItem-label" htmlFor={taskId}>情報</label>
      <textarea
        id={taskId}
        className="TaskItem-content-information"
        onChange={this._boundOnContentChange}
        defaultValue={taskContent}
      />
    </li>;
  }

  _onContentChange(e) {
    const task = new Task({
      lineId: this.props.line.id,
      date: this.props.date,
      type: Task.TYPE.INFORMATION,
      content: e.target.value
    });
    TaskAction.save(task);
  }

}
