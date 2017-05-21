import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";

class EventPage extends Component {
  constructor(props) {
    super(props);
    this.state = { event: [] };
  }

  componentDidMount() {
    var url = "/api/events/" + this.props.match.params.id;
    axios.get(url)
    .then(function(response) {
      this.setState({ event: response.data.event })
    }.bind(this));
  }

  render() {
    var event = this.state.event;
    return(
      <div>
        <p><strong>Evento:</strong>{ event.title }</p>
        <p><strong>Descrição:</strong>{ event.description }</p>
        <p><strong>Local:</strong>{ event.local }</p>
        <p><strong>Início:</strong>{ moment(this.state.event.start).format("DD/MM/YYYY HH:mm") }</p>
        <p><strong>Término:</strong>{ moment(this.state.event.end).format("DD/MM/YYYY HH:mm") }</p>
        <li><Link to={`/events/edit/${ this.props.match.params.id }`}>Edit</Link></li>
      </div>
    );
  }
}

export default EventPage;
