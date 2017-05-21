import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = { event: [] };
  }

  componentDidMount() {
    var url = "/api/events/" + this.props.match.params.id;
    axios({
      url: url,
      method: "get"
    }).then((response) => {
      this.setState({ event: response.data.event })
    });
  }

  requestDeleteEvent = () => {
    var url = "/api/events/" + this.props.match.params.id;
    axios({
      url: url,
      method: "delete"
    }).then((response) => {
      this.props.history.push("/");
      console.info("Event successfully deleted!");
    }).catch((error) => {
      console.error("Could not delete event!")
    })
  }

  render() {
    var event = this.state.event;
    return(
      <div>
        <p><strong>Evento:</strong>{ event.title }</p>
        <p><strong>Descrição:</strong>{ event.description }</p>
        <p><strong>Local:</strong>{ event.local }</p>
        <p><strong>Início:</strong>
          { moment(this.state.event.start).format("DD/MM/YYYY HH:mm") }
        </p>
        <p><strong>Término:</strong>
          { moment(this.state.event.end).format("DD/MM/YYYY HH:mm") }
        </p>
        <Link to={`/events/edit/${ this.props.match.params.id }`}>
          <button className="btn btn-default">Editar</button>
        </Link>
        <button
          className="btn btn-default"
          onClick={ this.requestDeleteEvent }>
          Excluir
        </button>
      </div>
    );
  }
}

export default Event;
