import React, { Component } from "react";
import EventForm from "./EventForm";
import moment from "moment";
import axios from "axios";

class EditEvent extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    return {
      title: "",
      description: "",
      local: "",
      start: moment().clone().locale("pt-BR"),
      end: moment().clone().locale("pt-BR"),
      eventUpdated: true
    }
  }

  componentWillMount() {
    var url = "/api/events/" + this.props.match.params.id;
    axios({
      url: url,
      method: "get"
    }).then((response) => {
      this.setState({
        title: response.data.event.title,
        local: response.data.event.local,
        description: response.data.event.description,
        start: moment(response.data.event.start),
        end: moment(response.data.event.end)
      })
    });
  }

  handleSubmit = (data) => {
    var url = "/api/events/" + this.props.match.params.id;
    axios({
      url: url,
      method: "put",
      data: data
    }).then((response) => {
      this.props.history.push(`/events/${this.props.match.params.id}`)
      console.info("Event successfully updated")
    }).catch((response) => {
      console.error("An error occured")
      this.setState({ eventUpdated: false })
    })
  }

  render() {
    return(
      <div className="form-container">
        <div className={this.state.eventUpdated? "hidden":"submission-error-message"}>
          Não foi possível salvar o evento.
        </div>
        <EventForm
          title={ this.state.title }
          local={ this.state.local }
          description={ this.state.description }
          start={ this.state.start }
          end={ this.state.end }
          handleSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditEvent;
