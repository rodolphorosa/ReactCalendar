import React, { Component } from "react";
import EventForm from "./EventForm";
import moment from "moment";
import axios from "axios";

class AddEvent extends Component {
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
      end: now.clone().add(1, "hours")
    }
  }

  handleInputChange = (event) => this.setState({ [event.target.name]: event.target.value })

  handleSelectStart = (date) => this.setState({ start: date })

  handleSelectEnd = (date) => this.setState({ end: date })

  handleSubmit = (event) => {
    axios({
      url: "/api/event",
      method: "post",
      data: {
        title: this.state.title,
        local: this.state.local,
        description: this.state.description,
        start: this.state.start,
        end: this.state.end
      }
    }).then((response) => {
      this.props.history.push("/")
      console.info("Event successfully saved!")
    }).catch((response) => {
      console.error("Could not save event!")
    });
  }

  render() {
    return(
      <EventForm
        start={ this.state.start }
        end={ this.state.end }
        handleInputChange={ this.handleInputChange }
        handleSelectStart={ this.handleSelectStart }
        handleSelectEnd={ this.handleSelectEnd }
        handleSubmit={ this.handleSubmit } />
    );
  }
}

export default AddEvent;
