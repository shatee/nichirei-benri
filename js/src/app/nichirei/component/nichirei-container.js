import React from 'react';
import LineList from './line-list';
import TaskList from './task-list';

export default class NichireiContainer extends React.Component {
  render() {
    const headDates = this.props.dates.map(date => {
      let id = '';
      let textAddition = '';
      switch (date) {
        case (this.props.today):
          id = 'today';
          textAddition = <span className="icon-today">今日</span>;
          break;
        case (this.props.yesterday):
          id = 'yesterday'
          textAddition = <span className="icon-yesterday">昨日</span>;
          break;
      }

      return <li id={id} className="NichireiContainer-tasks-heading-date" key={date}>{date}{textAddition}</li>;
    });

    return <div className="NichireiContainer">
      <div className="NichireiContainer-body">
        <LineList lines={this.props.lines} />
        <div className="NichireiContainer-tasks">
          <ul className="NichireiContainer-tasks-heading">{headDates}</ul>
          <TaskList
            lines={this.props.lines}
            tasks={this.props.tasks}
            dates={this.props.dates}
            today={this.props.today}
            yesterday={this.props.yesterday}
          />
        </div>
      </div>
    </div>;
  }
}
