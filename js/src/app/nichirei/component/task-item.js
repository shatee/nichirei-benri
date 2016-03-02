import React from 'react';
import TaskAction from '../action/task-action';
import Task from '../model/task';
import _ from 'underscore';

export default class TaskItem extends React.Component {
  
  render() {
    switch (this.props.line.type) {
      case 'progress':
        return this._renderTypeProgress();
      case 'information':
        return this._renderTypeInformation();
    }
  }
  
  _renderTypeProgress() {
    let taskDo;
    let taskDid;
    for (let task of this.props.tasks) {
      if (task.line_id != this.props.line.id) {
        continue;
      }
      if ((new Date(task.date)).getDate() !== (new Date(this.props.date)).getDate()) {
        continue;
      }
      switch (task.type) {
        case 'do':
          taskDo = task;
          break;
        case 'did':
          taskDid = task;
          break;
      }
    }

    const taskDoId = `TaskItem-do-${this.props.line.id}-${this.props.date}`;
    const taskDidId = `TaskItem-did-${this.props.line.id}-${this.props.date}`;
    const taskDoContent = taskDo ? taskDo.content : '';
    const taskDidContent = taskDid ? taskDid.content : '';
    //const onDoContentChange = _.debounce(_.bind(this._onDoContentChange, this), 1000);
    //const onDidContentChange = _.debounce(_.bind(this._onDidContentChange, this), 1000);
    const onDoContentChange = _.bind(this._onDoContentChange, this);
    const onDidContentChange = _.bind(this._onDidContentChange, this);

    return <div className="TaskItem">
      <label className="TaskItem-label" htmlFor={taskDoId}>やること</label>
      <textarea id={taskDoId} className="TaskItem-content-do" defaultValue={taskDoContent} onChange={onDoContentChange} />
      <label className="TaskItem-label" htmlFor={taskDidId}>やったこと</label>
      <textarea id={taskDidId} className="TaskItem-content-did" defaultValue={taskDidContent} onChange={onDidContentChange} />
    </div>;
  }
  
  _renderTypeInformation() {
    let task;
    for (let task_ of this.props.tasks) {
      if (task_.line_id != this.props.line.id) {
        continue;
      }
      if ((new Date(task_.date)).getDate() !== (new Date(this.props.date)).getDate()) {
        continue;
      }
      if (task_.type !== 'information') {
        continue;
      }
      task = task_;
      break;
    }

    const taskId = `TaskItem-task-${this.props.line.id}-${this.props.date}`;
    const taskContent = task ? task.content : '';
    //const onInformationContentChange = _.debounce(_.bind(this._onInformationContentChange, this), 1000);
    const onInformationContentChange = _.bind(this._onInformationContentChange, this);

    return <li className="TaskItem">
      <label className="TaskItem-label" htmlFor={taskId}>情報</label>
      <textarea id={taskId} className="TaskItem-content-information" defaultValue={taskContent} onChange={onInformationContentChange} />
    </li>;
  }

  _onDoContentChange(e) {
    const task = new Task();
    task.lineId = this.props.line.id;
    task.date = this.props.date;
    task.type = 'do';
    task.content = e.target.value;
    TaskAction.save(task);
  }

  _onDidContentChange(e) {
    const task = new Task();
    task.lineId = this.props.line.id;
    task.date = this.props.date;
    task.type = 'did';
    task.content = e.target.value;
    TaskAction.save(task);
  }

  _onInformationContentChange(e) {
    const task = new Task();
    task.lineId = this.props.line.id;
    task.date = this.props.date;
    task.type = 'information';
    task.content = e.target.value;
    TaskAction.save(task);
  }
}
