import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.date !== this.props.date) {
      this.setState({ date: nextProps.date })
    }
  }

  requestToday = () => this.props.requestToday();
  requestDate = () => this.props.requestDate(this.state.date);
  requestWeek = () => this.props.requestWeek(this.state.date);
  requestMonth = () => this.props.requestMonth(this.state.date);

  render() {
    return(
      <nav className="react-navbar">
        <ul className="react-navbar-ul">
          <li className="react-navbar-li" onClick={this.requestToday}>Hoje</li>
          <li className="react-navbar-li" onClick={this.requestDate}>Dia</li>
          <li className="react-navbar-li" onClick={this.requestWeek}>Semana</li>
          <li className="react-navbar-li" onClick={this.requestMonth}>Mês</li>
        </ul>
      </nav>
    );
  }
};

export default Navbar;
