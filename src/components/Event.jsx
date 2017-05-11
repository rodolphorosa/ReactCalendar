import React, { Component } from "react";
import axios from "axios";

class EventPage extends Component {
  constructor(props) {
    super(props);
    this.state = { event: null };
  }

  componentDidMount() {
    var url = "/api/events/" + this.props.match.params.id;
    axios.get(url)
    .then(function(response) {
      this.setState({ event: response.data.event });
    }.bind(this));
  }

  render() {
    if (this.state.event) {
      var event = this.state.event;
      var start = new Date(event.start);
      var end = new Date(event.end);
      return(
        <div>
          <p><strong>Evento:</strong> { event.title }</p>
          <p><strong>Descrição:</strong> { event.description }</p>
          <p><strong>Local:</strong> { event.local }</p>
        </div>
      );
    } else {
      return <p>Evento não encontrado.</p>
    }
  }
}

export default EventPage;
