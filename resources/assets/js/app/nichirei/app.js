import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from '../../../../../node_modules/flux/utils';
import LineList from './component/line-list';
import TasksHeading from './component/tasks-heading'
import TaskList from './component/task-list';
import LineStore from './store/line-store';
import TaskStore from './store/task-store';

export default class App extends React.Component {

  static propTypes = {
    dates: React.PropTypes.arrayOf(React.PropTypes.string),
    today: React.PropTypes.string,
    yesterday: React.PropTypes.string
  };

  static getStores() {
    return [
      LineStore,
      TaskStore
    ];
  }

  static calculateState(prevState) {
    return {
      lines: LineStore.getState(),
      tasks: TaskStore.getState()
    };
  }

  render() {
    return <div className="NichireiContainer">
      <div className="NichireiContainer-body">
        <TasksHeading
          dates={this.props.dates}
          today={this.props.today}
          yesterday={this.props.yesterday}
        />
        <LineList lines={this.state.lines} />
        <TaskList
          lines={this.state.lines}
          tasks={this.state.tasks}
          dates={this.props.dates}
        />
      </div>
    </div>;
  }
}

const AppContainer = Container.create(App);

const dataContainer = document.querySelector('.data-container');

const dateStart = new Date(dataContainer.dataset.dateStart);
const dateEnd = new Date(dataContainer.dataset.dateEnd);
const dateToday = new Date();
const dateYesterday = new Date(dateToday.getTime() - (24 * 60 * 60 * 1000));

let dates = [];
for (let date = dateStart; date.getTime() <= dateEnd.getTime(); date.setTime(date.getTime() + (24 * 60 * 60 * 1000))) {
  dates.push(date.toLocaleDateString());
}

ReactDOM.render(
  <AppContainer
    dates={dates}
    today={dateToday.toLocaleDateString()}
    yesterday={dateYesterday.toLocaleDateString()}
  />,
  document.querySelector('.content')
);

location.hash = 'today';
