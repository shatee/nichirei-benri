import React from 'react';
import ReactDOM from 'react-dom';
import NichireiContainer from './component/nichirei-container';

const content = document.querySelector('.content');
const dataContainer = document.querySelector('.data-container');

const lines = JSON.parse(dataContainer.dataset.lines);
const tasks = JSON.parse(dataContainer.dataset.tasks);
const dateStart = new Date(dataContainer.dataset.dateStart);
const dateEnd = new Date(dataContainer.dataset.dateEnd);
const dateToday = new Date();
const dateYesterday = new Date(dateToday.getTime() - (24 * 60 * 60 * 1000));

let dates = [];
for (let date = dateStart; date.getTime() <= dateEnd.getTime(); date.setTime(date.getTime() + (24 * 60 * 60 * 1000))) {
  dates.push(date.toLocaleDateString());
}

ReactDOM.render(<div>
  <NichireiContainer
    lines={lines}
    tasks={tasks}
    dates={dates}
    today={dateToday.toLocaleDateString()}
    yesterday={dateYesterday.toLocaleDateString()}
  />
</div>, content);

location.hash = 'today';
