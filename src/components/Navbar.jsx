import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          <li className="react-navbar-li">
            <Link to="/add">Criar</Link>
          </li>
          <li className="react-navbar-li" onClick={this.requestToday}>
            <Link activeClassName="active" to="">Hoje</Link>
          </li>
          <li className="react-navbar-li" onClick={this.requestDate}>
            <Link activeClassName="active" to="">Dia</Link>
          </li>
          <li className="react-navbar-li" onClick={this.requestWeek}>
            <Link activeClassName="active" to="">Semana</Link>
          </li>
          <li className="react-navbar-li" onClick={this.requestMonth}>
            <Link activeClassName="active" to="">Mês</Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navbar;
