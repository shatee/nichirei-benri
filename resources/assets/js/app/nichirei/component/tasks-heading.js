import React from 'react';
import PropTypes from 'prop-types';

export default class TasksHeading extends React.Component {

  static propTypes = {
    dates: PropTypes.arrayOf(PropTypes.string),
    today: PropTypes.string,
    yesterday: PropTypes.string
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
