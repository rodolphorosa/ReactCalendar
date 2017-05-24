import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

class TextInput extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    valid: PropTypes.bool,
    invalidFieldMessage: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value ? this.props.value:"",
      valid: true
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }

    if (nextProps.valid !== this.props.valid) {
      this.setState({ valid: nextProps.valid })
    }
  }

  render() {
    const classes = classnames({
      "form-control": true,
      "custom-input-text": true,
      "invalid-input": !this.state.valid
    });
    return (
      <div className="form-group">
        <label htmlFor={this.props.name}>{ this.props.label }</label>
        <input
          className={ classes }
          type="text"
          size={ 30 }
          name={ this.props.name }
          placeholder={ this.props.placeholder }
          value={ this.state.value }
          onChange={ this.props.onChange } />
        <div className={this.state.valid ? "hidden":"invalid-field-message"}>
          { this.props.invalidFieldMessage }
        </div>
      </div>
    );
  }
}

export default TextInput;
