import React, { Component } from "react";
import PropTypes from "prop-types";

class Hour extends Component {
  static propTypes = {
    date: PropTypes.object.isRequired
  }

  increase = (event) => {
    this.props.increase(event)
  }

  decrease = (event) => {
    this.props.decrease(event)
  }

  onChange = (event) => {
    if(!isNaN(this.input.value)) this.props.onChange(this.input, event)
  }

  render() {
    return(
      <div className="selector">
        <div
          className="up-down-button"
          onClick={ this.increase } >
          &#9652;
        </div>
        <input
          className="input-time"
          ref={ (input) => { this.input = input } }
          value={ this.props.date.format("HH") }
          size={ 5 }
          onChange={ this.onChange } />
        <div
          className="up-down-button"
          onClick={ this.decrease } >
          &#9662;
        </div>
      </div>
    );
  }
}

export default Hour;
