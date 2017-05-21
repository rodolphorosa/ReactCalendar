import React, { Component } from "react";
import classnames from "classnames";

class WeekHeader extends Component {
  render() {
    let classes = classnames({
      "week-name-div": true,
      "sunday": true
    })
    return(
      <div>
        <div key={0} className={ classes }>D</div>
        <div key={1} className="week-name-div">S</div>
        <div key={2} className="week-name-div">T</div>
        <div key={3} className="week-name-div">Q</div>
        <div key={4} className="week-name-div">Q</div>
        <div key={5} className="week-name-div">S</div>
        <div key={6} className="week-name-div">S</div>
      </div>
    );
  }
}

export default WeekHeader;
