import React, { Component } from "react";
import PropTypes from "prop-types";
import Day from "./Day";

class Week extends Component {
  static propTypes = {
    date: PropTypes.object.isRequired,
    month: PropTypes.number
  }

  onSelect = (day, event) => {
    this.props.onSelect(day, event);
  }

  renderWeek() {
    const startOfWeek = this.props.date.clone().startOf("week");
    const days = [];
    return days.concat([0, 1, 2, 3, 4, 5, 6].map((offset) => {
      const date = startOfWeek.clone().add(offset, "days");
      return(
        <Day
          key={ offset }
          date={ date }
          preSelected={ this.props.preSelected }
          month={ this.props.month }
          onSelect={ this.onSelect.bind(this, date) } />
      );
    }));
  }

  render() {
    return(
      <div>
        { this.renderWeek() }
      </div>
    );
  }
}

export default Week;
