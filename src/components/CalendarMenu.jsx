import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Calendar from "./Calendar";

const weekdays = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado"
];

class CalendarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date,
      calendarOpen: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.date !== this.props.date) {
      this.state.date = nextProps.date
    }
  }

  setOpen = (open) => this.setState({ calendarOpen: open })

  onClick = (event) => {
    this.setOpen(!this.state.calendarOpen)
  }

  render() {
    const classes = classnames({
      "calendar-menu-inner": true,
      "hidden": !this.state.calendarOpen
    })
    const dayInput = weekdays[this.state.date.day()] + ", " + this.state.date.locale("pt-BR").format("LL");
    return(
      <div className="calendar-menu">
        <div className="calendar-menu-inner">
          <input
            className="form-control home-date-input"
            readOnly
            value={ dayInput }
            onClick={this.onClick} />
        </div>        
        <div className={classes}>
          <Calendar preSelected={this.state.date} onSelect={this.props.onSelect} />
        </div>
      </div>
    );
  }
}

export default CalendarMenu;
