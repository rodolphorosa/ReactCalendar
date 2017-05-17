import React, { Component } from "react";
import MonthHeader from "./MonthHeader";
import Month from "./Month";
import Time from "./Time";
import moment from "moment";
import PropTypes from "prop-types";

class Calendar extends Component {
  static propTypes = {
    preSelected: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    let date = this.props.preSelected
    return {
      date: date
    }
  }

  onCancel = (event) => this.props.onClose(event)

  onSelectTime = (day, event) => {
    let selected = this.state.date.clone().set({
      "hour": day.hours(),
      "minutes": day.minutes()
    });
    this.props.onSelect(selected, event)
    this.props.onClose(event)
  }

  onSelectDate = (day, event) => {
    let selected = this.state.date.clone().set({
      "year": day.year(),
      "month": day.month(),
      "date": day.date()
    });
    this.setState({ date: selected })
    this.props.onSelect(selected, event)
  }

  onIncreaseMonth = () => {
    let nextMonth = this.state.date.clone().add(1, "month");
    this.setState({ date: nextMonth });
  }

  onDecreaseMonth = () => {
    let previousMonth = this.state.date.clone().subtract(1, "month");
    this.setState({ date: previousMonth });
  }

  onIncreaseYear = () => {
    let nextYear = this.state.date.clone().add(1, "year");
    this.setState({ date: nextYear });
  }

  onDecreaseYear = () => {
    let previousYear = this.state.date.clone().subtract(1, "year");
    this.setState({ date: previousYear });
  }

  onIncreaseHour = (event) => {
    let increased = this.state.date.hours() < 23 ?
      this.state.date.clone().add(1, "hours") :
      this.state.date.clone().hours(0);
    this.setState({ date: increased });
  }

  onDecreaseHour = (event) => {
    let decreased = this.state.date.hours() > 0 ?
      this.state.date.clone().subtract(1, "hours") :
      this.state.date.clone().hours(23);
    this.setState({ date: decreased });
  }

  onIncreaseMinute = (event) => {
    let increased = this.state.date.minutes() < 59 ?
      this.state.date.clone().add(1, "minutes") :
      this.state.date.clone().minutes(0);
    this.setState({ date: increased });
  }

  onDecreaseMinute = (event) => {
    let decreased = this.state.date.minutes() > 0 ?
      this.state.date.clone().subtract(1, "minutes") :
      this.state.date.clone().minutes(59);
    this.setState({ date: decreased });
  }

  onChangeHour = (input, event) => {
    let date = input.value <= 23 ?
      this.state.date.clone().hours(input.value) :
      this.state.date.clone().hours(23);
    this.setState({ date: date });
  }

  onChangeMinutes = (input, event) => {
    let date = input.value <= 59 ?
      this.state.date.clone().minutes(input.value) :
      this.state.date.clone().minutes(59);
    this.setState({ date: date });
  }

  renderCalendar() {
    return <div className="calendar-wrapper">
            <div className="calendar-header">
              <div
                className="calendar-button"
                onClick={ this.onDecreaseYear }>&laquo;</div>
              <div
                className="calendar-button"
                onClick={ this.onDecreaseMonth }>&#8249;</div>
              <MonthHeader date={ this.state.date } />
              <div
                className="calendar-button"
                onClick={ this.onIncreaseMonth }>&#8250;</div>
              <div
                className="calendar-button"
                onClick={ this.onIncreaseYear }>&raquo;</div>
            </div>
            <Month
              date={this.state.date}
              preSelected={ this.state.date }
              onSelect={ this.onSelectDate } />
          </div>
  }

  renderTime() {
    return <Time
            date={ this.state.date }
            onIncreaseMinute={ this.onIncreaseMinute }
            onDecreaseMinute={ this.onDecreaseMinute }
            onIncreaseHour={ this.onIncreaseHour }
            onDecreaseHour={ this.onDecreaseHour }
            onChangeHour={ this.onChangeHour }
            onChangeMinutes={ this.onChangeMinutes } />
  }

  render() {
    return(
      <div className="datetime-wrapper">
        { this.renderCalendar() }
        { this.renderTime() }
        <div className="button-wrapper">
          <a onClick={ this.onCancel }>Cancelar</a>
          <a onClick={ this.onSelectTime.bind(this, this.state.date) }>OK</a>
        </div>
      </div>
    );
  }
}

export default Calendar;
