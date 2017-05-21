import React, { Component } from "react";
import EventForm from "./EventForm";
import moment from "moment";
import axios from "axios";

class EventCreate extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    let now = moment().clone().locale("pt-BR").seconds(0).milliseconds(0)
    return {
      title: "",
      description: "",
      local: "",
      start: now,
      end: now.clone().add(2, "hours")
    }
  }

  onChange = (event) => this.setState({ [event.target.name]: event.target.value })

  onSelectStart = (date) => this.setState({ start: date })

  onSelectEnd = (date) =>  this.setState({ end: date })

  onSubmit = (event) => {
    axios.post("/api/event", {
      title: this.state.title,
      local: this.state.local,
      description: this.state.description,
      start: this.state.start,
      end: this.state.end
    }).then((response) => {
      this.props.history.push("/")
      console.info("Event successfully saved!")
    }).catch((response) => {
      console.error("Could not save event!")
    })
  }

  render() {
    return(
      <EventForm
        onChange={ this.onChange }
        onSubmit={ this.onSubmit }
        onSelectStart={ this.onSelectStart }
        onSelectEnd={ this.onSelectEnd } />
    );
  }
}

export default EventCreate;
