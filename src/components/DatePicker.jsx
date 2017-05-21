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
    onSelect: PropTypes.func,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
    preSelected: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    return {
      selected: this.props.preSelected ? this.props.preSelected : moment().locale("pt-BR"),
      calendarOpen: false,
      timerOpen: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.preSelected !== this.props.preSelected) {
      this.setState({ selected: nextProps.preSelected })
    }
  }

  onSelect = (date, event) => {
    // this.setState({ selected: date })
    // if(this.props.onSelect) this.props.onSelect(date)
    let selected = this.state.selected.clone().set({
      "year": date.year(),
      "month": date.month(),
      "date": date.date()
    })
    this.setState({ selected: selected })
    this.props.onSelect(selected)
  }

  onDecreaseHour = (event) => {
    let decreased = this.state.selected.hours() > 0 ?
      this.state.selected.clone().subtract(1, "hours") :
      this.state.selected.clone().hours(23);
    this.setState({ selected: decreased });
  }

  onIncreaseMinute = (event) => {
    let increased = this.state.selected.minutes() < 59 ?
      this.state.selected.clone().add(1, "minutes") :
      this.state.selected.clone().minutes(0);
    this.setState({ selected: increased });
  }

  onDecreaseMinute = (event) => {
    let decreased = this.state.selected.minutes() > 0 ?
      this.state.selected.clone().subtract(1, "minutes") :
      this.state.selected.clone().minutes(59);
    this.setState({ selected: decreased });
  }

  onChangeHour = (input, event) => {
    let date = input.value <= 23 ?
      this.state.selected.clone().hours(input.value) :
      this.state.selected.clone().hours(23);
    this.setState({ selected: date });
  }

  onChangeMinutes = (input, event) => {
    let date = input.value <= 59 ?
      this.state.selected.clone().minutes(input.value) :
      this.state.selected.clone().minutes(59);
    this.setState({ selected: date });
  }

  onClose = (event) => this.setCalendarOpen(false)

  onInputClick = (event) => {
    this.setCalendarOpen(!this.state.calendarOpen)
    this.setTimerOpen(false)
  }

  setCalendarOpen = (open) => this.setState({ calendarOpen: open })

  setTimerOpen = (open) => this.setState({ timerOpen: open })

  toggleCalendar = (event) => this.setCalendarOpen(!this.state.calendarOpen)

  toggleTimer = (event) => this.setTimerOpen(!this.state.timerOpen)

  toggle = (event) => {
    this.toggleCalendar(event)
    this.toggleTimer(event)
  }

  render() {
    return(
      <div className="form-group">
        <div className="input-container">
          <label htmlFor={ this.props.name }>{ this.props.label }</label>
          <input
            className="form-control costum-input-text"
            name={ this.props.name }
            type="text"
            ref={ (input) => { this.input = input; } }
            value={ this.state.selected.format("DD/MM/YYYY HH:mm") }
            readOnly
            onClick={ this.onInputClick.bind(this) } />
          <div className={ this.state.calendarOpen ? "" : "hidden" }>
            <Calendar
              preSelected={ this.state.selected }
              onSelect={ this.onSelect }
              onCancel={ this.onCancel }
              onClose={ this.onClose }
              toggle={ this.toggle } />
          </div>
          <div className={ this.state.timerOpen ? "" : "hidden" }>
            <Time
              date={ this.state.selected }
              onIncreaseMinute={ this.onIncreaseMinute }
              onDecreaseMinute={ this.onDecreaseMinute }
              onIncreaseHour={ this.onIncreaseHour }
              onDecreaseHour={ this.onDecreaseHour }
              onChangeHour={ this.onChangeHour }
              onChangeMinutes={ this.onChangeMinutes }
              toggle={ this.toggle } />
          </div>
        </div>
      </div>
    );
  }
}

export default DatePicker;
