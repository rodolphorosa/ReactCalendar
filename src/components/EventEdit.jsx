import React, { Component } from "react";
import EventForm from "./EventForm";
import moment from "moment";
import axios from "axios";

class EventEdit extends Component {
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
      end: moment().clone().locale("pt-BR")
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

  onChange = (event) => this.setState({ [event.target.name]: event.target.value })

  onSelectStart = (date, event) => this.setState({ start: date })

  onSelectEnd = (date, event) => this.setState({ end: date })

  onSubmit = (event, history) => {
    var url = "/api/events/" + this.props.match.params.id;
    axios({
      url: url,
      method: "put",
      data: {
        title: this.state.title,
        local: this.state.local,
        description: this.state.description,
        start: this.state.start,
        end: this.state.end
      }
    }).then((response) => {
      this.props.history.push(`/events/${this.props.match.params.id}`)
      console.info("Event successfully update")
    }).catch((response) => {
      console.error("An error occured")
    })
  }

  render() {
    return(
      <EventForm
        title={ this.state.title }
        local={ this.state.local }
        description={ this.state.description }
        start={ this.state.start }
        end={ this.state.end }
        onChange={ this.onChange }
        onSubmit={ this.onSubmit }
        onSelectStart={ this.onSelectStart }
        onSelectEnd={ this.onSelectEnd } />
    );
  }
}

export default EventEdit;
