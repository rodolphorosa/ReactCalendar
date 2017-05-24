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
    return {
      eventCreated: true
    }
  }

  handleSubmit = (data) => {
    axios({
      url: "/api/event",
      method: "post",
      data: data
    }).then((response) => {
      this.props.history.push("/")
      console.info("Event successfully saved!")
    }).catch((response) => {
      console.error("Could not save event!")
      this.setState({ eventCreated: false })
    });
  }

  render() {
    const now = moment().clone().locale("pt-BR").seconds(0).milliseconds(0);
    return(
      <div className="form-container">
        <div className={this.state.eventCreated? "hidden":"submission-error-message"}>
          Não foi possível salvar o evento.
        </div>
        <EventForm
          start={ now }
          end={ now.clone().add(2, "hours") }
          handleSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default AddEvent;
