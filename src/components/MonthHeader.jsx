import React, { Component } from "react";
import PropTypes from "prop-types";

class MonthHeader extends Component {
  static propTypes = {
    date: PropTypes.object.isRequired
  }

  render() {
    var months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ];

    let month = months[this.props.date.month()];
    let year = this.props.date.year();

    return(
      <div className="month-header">{month} de {year}</div>
    );
  }
}

export default MonthHeader;
