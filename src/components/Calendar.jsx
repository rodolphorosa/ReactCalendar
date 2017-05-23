import React, { Component } from "react";
import ReactDOM from "react-dom";
import MonthHeader from "./MonthHeader";
import Month from "./Month";
import moment from "moment";
import PropTypes from "prop-types";
import classnames from "classnames";

class Calendar extends Component {
  static propTypes = {
    preSelected: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    return {
      date: this.props.preSelected ? this.props.preSelected : moment().locale("pt-BR")
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.preSelected !== this.props.preSelected) {
      this.setState({ date: nextProps.preSelected })
    }
  }

  onSelect = (day, event) => {
    this.setState({ date: day })
    this.props.onSelect(day, event)
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

  toggle = (event) => {
    this.props.onToggle(event)
  }

  renderCalendar() {
    return <div className="calendar-container">
            <div className="calendar-header">
              <div
                className="right-left-button"
                onClick={ this.onDecreaseYear }>&laquo;</div>
              <div
                className="right-left-button"
                onClick={ this.onDecreaseMonth }>&#8249;</div>
              <MonthHeader date={ this.state.date } />
              <div
                className="right-left-button"
                onClick={ this.onIncreaseMonth }>&#8250;</div>
              <div
                className="right-left-button"
                onClick={ this.onIncreaseYear }>&raquo;</div>
            </div>
            <Month
              date={ this.state.date }
              preSelected={ this.props.preSelected }
              onSelect={ this.onSelect } />
          </div>
  }

  renderTimer() {
    return <div
      className={ this.props.displayTimer ? "toggleButton":"hidden" }
      onClick={ this.toggle }>
      { this.state.date.format("HH:mm") }
    </div>
  }

  render() {
    return(
      <div className="calendar-wrapper">
        { this.renderCalendar() }
        { this.renderTimer() }
      </div>
    );
  }
}

export default Calendar;
