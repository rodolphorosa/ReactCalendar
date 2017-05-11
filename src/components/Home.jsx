import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentDidMount() {
    axios.get("/api/events").then(function(response) {
      this.setState({ events: response.data.events });
    }.bind(this));
  }

  render() {
    if (this.state.events) {
      var eventList = this.state.events.map(function(event) {
        return <li key={event._id}><Link to="/api/events/${event._id}">{event.title}</Link></li>
      });

      return(
        <ul>{ eventList }</ul>
      );
    } else {
      return(
        <p>Ainda não há eventos cadastrados.</p>
      );
    }
  }
}

export default Home;
