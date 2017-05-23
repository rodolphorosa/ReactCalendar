import React, { Component } from "react";
import { Link } from "react-router-dom";
import Calendar from "./Calendar";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.date !== this.props.date) {
      this.state.date = nextProps.date
    }
  }

  render() {
    return(
      <div className="col-sm-4 sidebar">
        <div className="create-button-container">
          <Link to="/add">
            <div className="create-button">
              Criar
            </div>
          </Link>
        </div>
        <div>
          <Calendar preSelected={this.state.date} onSelect={this.props.onSelect} />
        </div>
      </div>
    );
  }
}

export default Sidebar;
