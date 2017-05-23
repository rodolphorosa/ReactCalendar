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

  handleTitleChange = (event) => this.setState({ title: event.target.value })

  handleLocalChange = (event) => this.setState({ local: event.target.value })

  handleDescriptionChange = (event) => this.setState({ description: event.target.value })

  // handleInputChange = (event) => this.setState({ [event.target.name]: event.target.value })

  handleSelectStart = (date) => this.setState({ start: date })

  handleSelectEnd = (date) => this.setState({ end: date })

  handleSubmit = (event) => {
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
        handleSubmit={ this.handleSubmit }
        handleTitleChange={ this.handleTitleChange }
        handleLocalChange={ this.handleLocalChange }
        handleDescriptionChange={ this.handleDescriptionChange }
        handleSelectStart={ this.handleSelectStart }
        handleSelectEnd={ this.handleSelectEnd } />
    );
  }
}

export default EditEvent;
