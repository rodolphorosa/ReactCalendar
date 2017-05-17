import React, { Component } from "react";
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
      this.setState({ evento: response.data.event });
      console.log(response.data.event);
    }.bind(this));
  }

  render() {
    var event = this.state.event;
    return(
      <div>
        <p><strong>Evento:</strong> { event.title }</p>
        <p><strong>Descrição:</strong> { event.description }</p>
        <p><strong>Local:</strong> { event.local }</p>
      </div>
    );
  }
}

export default EventPage;
