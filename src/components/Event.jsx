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
    }).catch((error) => {
      console.error(error)
    })
  }

  render() {
    var event = this.state.event;
    return(
      <div className="event-detail">
        <div className="event-name-div"><h2>{ event.title }</h2></div>
        <div className="event-table-container">
          <table className="event-table">
            <tbody className="event-tbody">
              <tr>
                <td className="event-field-name">Onde</td>
                <td className="event-field-value">{ event.local }</td>
              </tr>
              <tr>
                <td className="event-field-name">Descrição</td>
                <td className="event-field-value">{ event.description }</td>
              </tr>
              <tr>
                <td className="event-field-name">Início</td>
                <td className="event-field-value">
                  { moment(event.start).locale("pt-BR").format("dddd, LLL") }
                </td>
              </tr>
              <tr>
                <td className="event-field-name">Término</td>
                <td className="event-field-value">
                  { moment(event.end).locale("pt-BR").format("dddd, LLL") }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <Link to={`/events/edit/${ this.props.match.params.id }`}>
            <button className="btn btn-default btn-event">
              Editar
            </button>
          </Link>
          <button
            className="btn btn-default btn-event"
            onClick={ this.requestDeleteEvent }>
            Excluir
          </button>
        </div>
      </div>
    );
  }
}

export default Event;
