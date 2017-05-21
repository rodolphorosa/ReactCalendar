import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Minute from "./Minute";
import Hour from "./Hour";

class Time extends Component {
  static propTypes = {
    date: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    return {
      date: this.props.date ? this.props.date : moment().locale("pt-BR").hours()
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.date !== this.props.date) {
      this.setState({ date: nextProps.date })
    }
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

  toggle = (event) => {
    this.props.onToggle(event)
  }

  render() {
    return(
      <div className="time-wrapper">
        <div
          className="toggleButton"
          onClick={ this.toggle }>
          { this.state.date.format("DD/MM/YYYY") }
        </div>
        <div className="time-container">
          <Hour
            date={ this.state.date }
            increase={ this.onIncreaseHour }
            decrease={ this.onDecreaseHour }
            onChange={ this.onChangeHour } />
          <div className="separator">:</div>
          <Minute
            date={ this.state.date }
            increase={ this.onIncreaseMinute }
            decrease={ this.onDecreaseMinute }
            onChange={ this.onChangeMinutes } />
        </div>
      </div>
    );
  }

}

export default Time;
