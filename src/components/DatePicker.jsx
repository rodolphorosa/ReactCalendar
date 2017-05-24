import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import moment from "moment";
import Calendar from "./Calendar";
import Time from "./Time";

class DatePicker extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    format: PropTypes.string,
    preSelected: PropTypes.object,
    displayTimer: PropTypes.bool,
    onSelect: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    return {
      selected: this.props.preSelected ? this.props.preSelected : moment().locale("pt-BR"),
      calendarOpen: false,
      timerOpen: false,
      valid: true
    }
  }

  componentWillMount() {
    document.addEventListener("click", this.onClickOutside, false)
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.onClickOutside, false)
  }

  onClickOutside = (event) => {
    if(!ReactDOM.findDOMNode(this).contains(event.target)) {
      this.setCalendarOpen(false)
      this.setTimerOpen(false)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.preSelected !== this.props.preSelected) {
      this.setState({ selected: nextProps.preSelected })
    }

    if (nextProps.valid !== this.props.valid) {
      this.setState({ valid: nextProps.valid })
    }
  }

  onSelect = (date, event) => {
    let selected = this.state.selected.clone().set({
      "year": date.year(),
      "month": date.month(),
      "date": date.date()
    })
    this.setState({ selected: selected })
    this.props.onSelect(selected)
  }

  onIncreaseHour = (event) => {
    let increased = this.state.selected.hours() < 23 ?
      this.state.selected.clone().add(1, "hours") :
      this.state.selected.clone().hours(0);
    this.setState({ selected: increased });
    this.props.onSelect(increased);
  }

  onDecreaseHour = (event) => {
    let decreased = this.state.selected.hours() > 0 ?
      this.state.selected.clone().subtract(1, "hours") :
      this.state.selected.clone().hours(23);
    this.setState({ selected: decreased });
    this.props.onSelect(decreased);
  }

  onIncreaseMinute = (event) => {
    let increased = this.state.selected.minutes() < 59 ?
      this.state.selected.clone().add(1, "minutes") :
      this.state.selected.clone().minutes(0);
    this.setState({ selected: increased });
    this.props.onSelect(increased);
  }

  onDecreaseMinute = (event) => {
    let decreased = this.state.selected.minutes() > 0 ?
      this.state.selected.clone().subtract(1, "minutes") :
      this.state.selected.clone().minutes(59);
    this.setState({ selected: decreased });
    this.props.onSelect(decreased);
  }

  onChangeHour = (input, event) => {
    let date = input.value <= 23 ?
      this.state.selected.clone().hours(input.value) :
      this.state.selected.clone().hours(23);
    this.setState({ selected: date });
    this.props.onSelect(date);
  }

  onChangeMinutes = (input, event) => {
    let date = input.value <= 59 ?
      this.state.selected.clone().minutes(input.value) :
      this.state.selected.clone().minutes(59);
    this.setState({ selected: date });
    this.props.onSelect(date);
  }

  onInputClick = (event) => {
    if (this.state.calendarOpen || this.state.timerOpen) {
      this.setCalendarOpen(false);
      this.setTimerOpen(false);
    } else {
      this.setCalendarOpen(true);
    }
  }

  setCalendarOpen = (open) => this.setState({ calendarOpen: open })

  setTimerOpen = (open) => this.setState({ timerOpen: open })

  toggleCalendar = (event) => this.setCalendarOpen(!this.state.calendarOpen)

  toggleTimer = (event) => this.setTimerOpen(!this.state.timerOpen)

  onToggle = (event) => {
    this.toggleCalendar(event)
    this.toggleTimer(event)
  }

  render() {
    const format = this.props.format ? this.props.format : "DD/MM/YYYY HH:mm";
    const classes = classnames({
      "form-control": true,
      "custom-input-text": true,
      "invalid-date": !this.state.valid
    })
    return(
      <div className="form-group datepicker">
        <div className="input-container">
          <label htmlFor={ this.props.name }>{ this.props.label }</label>
          <input
            className={ classes }
            name={ this.props.name }
            type="text"
            ref={ (input) => { this.input = input; } }
            value={ this.state.selected.format(format) }
            readOnly
            onClick={ this.onInputClick.bind(this) } />
          <div className={this.state.valid ? "hidden":"invalid-field-message"}>
            { this.props.invalidFieldMessage }
          </div>
          <div className={ this.state.calendarOpen ? 'absolute':'hidden' }>
            <Calendar
              preSelected={ this.state.selected }
              onSelect={ this.onSelect }
              onToggle={ this.onToggle }
              displayTimer={ this.props.displayTimer } />
          </div>
          <div className={ this.state.timerOpen ? 'absolute':'hidden'}>
            <Time
              date={ this.state.selected }
              onIncreaseMinute={ this.onIncreaseMinute }
              onDecreaseMinute={ this.onDecreaseMinute }
              onIncreaseHour={ this.onIncreaseHour }
              onDecreaseHour={ this.onDecreaseHour }
              onChangeHour={ this.onChangeHour }
              onChangeMinutes={ this.onChangeMinutes }
              onToggle={ this.onToggle } />
          </div>
        </div>
      </div>
    );
  }
}

export default DatePicker;
