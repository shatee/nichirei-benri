import React from 'react';
import PropTypes from 'prop-types';
import NoticeAction from '../action/notice-action';

export default class Notice extends React.Component {

  static propTypes = {
    isVisible: PropTypes.bool,
    message: PropTypes.string,
    isError: PropTypes.bool
  };

  static defaultProps = {
    isVisible: false,
    message: null,
    isError: false
  };

  _timer = null;

  componentDidUpdate() {
    if (this.props.isVisible) {
      if (this._timer) {
        clearTimeout(this._timer);
      }
      this._timer = setTimeout(() => {
        this._timer = null;
        NoticeAction.flush();
      }, 2000);
    }
  }

  render() {
    if (!this.props.isVisible) {
      return null;
    }

    const className = 'Notice' + (this.props.isError ? ' is-error': '');
    return (
      <div className={className}>
        {this.props.message}
      </div>
    );
  }
}
