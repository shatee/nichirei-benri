import React from 'react';

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
      if (task.line_id !== this.props.line.id) {
        continue;
      }
      if (task.date !== this.props.date) {
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

    return <div className="TaskItem">
      <label className="TaskItem-label" htmlFor={taskDoId}>やること</label>
      <textarea id={taskDoId} className="TaskItem-content-do" defaultValue={taskDoContent} onchange={this._onDoContentChange} />
      <label className="TaskItem-label" htmlFor={taskDidId}>やったこと</label>
      <textarea id={taskDidId} className="TaskItem-content-did" defaultValue={taskDidContent} onchange={this._onDidContentChange} />
    </div>;
  }
  
  _renderTypeInformation() {
    let task;
    for (let task_ of this.props.tasks) {
      if (task_.line_id !== this.props.line.id) {
        continue;
      }
      if (task_.date !== this.props.date) {
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

    return <li className="TaskItem">
      <label className="TaskItem-label" htmlFor={taskId}>情報</label>
      <textarea id={taskId} className="TaskItem-content-information" defaultValue={taskContent} onchange={this._onInformationContentChange} />
    </li>;
  }

  _onDoContentChange(e) {

  }

  _onDidContentChange(e) {

  }

  _onInformationContentChange(e) {

  }
}
