import React from 'react';

export default class TasksHeading extends React.Component {

  static propTypes = {
    dates: React.PropTypes.arrayOf(React.PropTypes.string),
    today: React.PropTypes.string,
    yesterday: React.PropTypes.string
  };

  render() {
    const headDates = this.props.dates.map((date) => {
      let id = '';
      let textAddition = '';
      switch (date) {
        case (this.props.today):
          id = 'today';
          textAddition = <span className="icon-today">今日</span>;
          break;
        case (this.props.yesterday):
          id = 'yesterday';
          textAddition = <span className="icon-yesterday">昨日</span>;
          break;
      }

      return <li id={id} className="TasksHeading-date" key={date}>{date}{textAddition}</li>;
    });

    return <ul className="TasksHeading">{headDates}</ul>;
  }
}
