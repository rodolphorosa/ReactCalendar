import React, { Component } from "react";
import PropTypes from "prop-types";
import Minute from "./Minute";
import Hour from "./Hour";

class Time extends Component {
  static propTypes = {
    date: PropTypes.object.isRequired
  }

  onIncreaseMinute = (event) => {
    this.props.onIncreaseMinute(event)
  }

  onDecreaseMinute = (event) => {
    this.props.onDecreaseMinute(event)
  }

  onIncreaseHour = (event) => {
    this.props.onIncreaseHour(event)
  }

  onDecreaseHour = (event) => {
    this.props.onDecreaseHour(event)
  }

  onChangeHour = (input, event) => {
    this.props.onChangeHour(input, event)
  }

  onChangeMinutes = (input, event) => {
    this.props.onChangeMinutes(input, event)
  }

  render() {
    return(
      <div className="timer-wrapper">
        <Hour
          date={ this.props.date }
          increase={ this.onIncreaseHour }
          decrease={ this.onDecreaseHour }
          onChange={ this.onChangeHour } />
        <div className="separator">:</div>
        <Minute
          date={ this.props.date }
          increase={ this.onIncreaseMinute }
          decrease={ this.onDecreaseMinute }
          onChange={ this.onChangeMinutes } />
      </div>
    );
  }

}

export default Time;
