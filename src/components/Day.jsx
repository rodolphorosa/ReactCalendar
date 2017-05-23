import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import moment from "moment";

class Day extends Component {
  static propTypes = {
    date: PropTypes.object.isRequired,
    month: PropTypes.number
  }

  handleClick = (event) => {
    this.props.onSelect(event)
  }

  isToday = () => {
    return moment().isSame(this.props.date, "day")
  }

  isOutOfMonth = () => {
    return this.props.month !== this.props.date.month()
  }

  isPreSelected = () => {
    return this.props.preSelected && this.props.date.isSame(this.props.preSelected, "day")
  }

  isSunday = () => {
    return this.props.date.weekday() == 0 && !this.isOutOfMonth()
  }

  render() {
    var classes = classnames({
      "sunday": this.isSunday(),
      "day-div": !this.isToday(),
      "today-div": this.isToday(),
      "out-of-month-div": this.isOutOfMonth(),
      "pre-selected-div": this.isPreSelected()
    });

    return(
      <div
        className={ classes }
        onClick={ this.handleClick }>
        { this.props.date.date() }
      </div>
    );
  }
}

export default Day;
