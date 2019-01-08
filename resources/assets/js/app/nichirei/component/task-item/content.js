import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import ClickOutComponent from 'react-onclickout';

export default class Content extends ClickOutComponent {

  static propTypes = {
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onFocus: PropTypes.func,
    onFix: PropTypes.func
  };

  static defaultProps = {
    softBreak: '<br>'
  };

  state = {
    isEditing: false,
    content: ''
  };

  constructor() {
    super();
    this._boundOnFocus = this._onFocus.bind(this);
    this._boundOnChange = this._onChange.bind(this);
  }

  componentWillMount() {
    this.state.content = this.props.content;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.isEditing !== nextState.isEditing) {
      return true;
    }

    if (this.state.isEditing) {
      // 編集中は content が変わっても更新しない
      return false;
    } else {
      // 編集中じゃなければ content の変更に応じて更新する
      return this.state.content !== nextState.content;
    }
  }

  componentDidUpdate() {
    if (this._textareaComponent) {
      this._textareaComponent.focus();
    }
  }

  render() {
    const content = this.state.isEditing ? this._makeEditing() : this._makeMarkdown();

    return <div className="Content">
      <label className="Content-label" htmlFor={this.props.id}>{this.props.labelText}</label>
      {content}
    </div>
  }

  _makeMarkdown() {
    return <div className="Content-markdown" onClick={this._boundOnFocus}>
      <ReactMarkdown source={this.state.content}/>
    </div>;
  }

  _makeEditing() {
    return <div className="Content-editing">
      <textarea
        id={this.props.id}
        className="Content-editingTextarea"
        onChange={this._boundOnChange}
        defaultValue={this.state.content}
        ref={(c) => this._textareaComponent = c}
      />
    </div>
  }

  /**
   * @override
   */
  onClickOut() {
    this._onFix();
  }

  _onFocus(e) {
    if (this.state.isEditing) {
      return;
    }

    // クリックされたのがリンクだったら editing にしない
    if (e.target && e.target.nodeName === 'A') {
      return;
    }

    this.setState({
      isEditing: true
    });

    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  _onChange(e) {
    this.setState({
      content: e.target.value
    });
  }

  _onFix() {
    if (!this.state.isEditing) {
      return;
    }

    this.setState({
      isEditing: false
    });

    if (this.props.onFix) {
      this.props.onFix(this.state.content);
    }
  }

}
