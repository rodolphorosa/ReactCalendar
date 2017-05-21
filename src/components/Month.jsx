import React, { Component } from "react";
import PropTypes from "prop-types";
import WeekHeader from "./WeekHeader";
import Week from "./Week";

class Month extends Component {
  static propTypes = {
    date: PropTypes.object.isRequired
  }

  onSelect = (day, event) => {
    this.props.onSelect(day, event);
  }

  renderMonth() {
    const weeks = [];
    let thisWeekStart = this.props.date.clone().startOf("month").startOf("week");
    let i = 0;

    weeks.push(<WeekHeader key={"header"} />);

    while(true) {
      weeks.push(
        <Week
          key={i}
          date={ thisWeekStart }
          preSelected={ this.props.preSelected }
          month={ this.props.date.month() }
          onSelect={ this.onSelect } />
      );

      thisWeekStart = thisWeekStart.clone().add(1, "weeks");

      i++;

      if (thisWeekStart > this.props.date.clone().endOf("month")) break;

    }

    return weeks;
  }

  render() {
    return(
      <div className="month">
        { this.renderMonth() }
      </div>
    );
  }
}

export default Month;
