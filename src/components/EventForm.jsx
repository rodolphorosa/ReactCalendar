import React, { Component } from "react";
import PropTypes from "prop-types";
import TextArea from "./TextArea";
import TextInput from "./TextInput";
import DatePicker from "./DatePicker";
import {
  isTitleValid,
  isStartDateValid,
  isEndDateValid,
  isFormValid } from "./validation.js";

class EventForm extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    local: PropTypes.string,
    start: PropTypes.object,
    end: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired,
    handleSelectStart: PropTypes.func.isRequired,
    handleSelectEnd: PropTypes.func.isRequired,
    handleTitleChange: PropTypes.func.isRequired,
    handleLocalChange: PropTypes.func.isRequired,
    handleDescriptionChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = this.getInitialState()
  }

  getInitialState = () => {
    return {
      title: this.props.title ? this.props.title : "",
      local: this.props.local ? this.props.local : "",
      description: this.props.description ? this.props.description : "",
      start: this.props.start,
      end: this.props.end,
      titleValid: true,
      localValid: true,
      descriptionValid: true,
      startValid: true,
      endValid: true
    }
  }

  onSelectStart = (date, event) => {
    this.props.handleSelectStart(date, event);
    this.setState({
      start: date,
      startValid: isStartDateValid(date, this.state.end),
      endValid: isEndDateValid(date, this.state.end)
    });
  }

  onSelectEnd = (date, event) => {
    this.props.handleSelectEnd(date, event);
    this.setState({
      end: date,
      endValid: isEndDateValid(this.state.start, date),
      startValid: isEndDateValid(this.state.start, date)
    });
  }

  onTitleChange = (event) => {
    this.props.handleTitleChange(event);
    this.setState({
      title: event.target.value,
      titleValid: isTitleValid(event.target.value)
    })
  }

  onLocalChange = (event) => {
    this.props.handleLocalChange(event);
    this.setState({
      local: event.target.value
    })
  }

  onDescriptionChange = (event) => {
    this.props.handleDescriptionChange(event);
    this.setState({
      description: event.target.value
    })
  }

  onSubmit = (event) => {
    if (isFormValid(this.state.title, this.state.start, this.state.end))
      this.props.handleSubmit(event)
  }

  render() {
    return(
      <div>
        <form>
          <TextInput
            valid={ this.state.titleValid }
            name="title"
            placeholder="Evento sem título"
            value={ this.props.title }
            onChange={ this.onTitleChange } />
          <TextInput
            valid={ true }
            name="local"
            label="Onde: "
            placeholder="Digite um local"
            value={ this.props.local }
            onChange={ this.onLocalChange } />
          <TextArea
            valid={ true }
            name="description"
            label="Descrição: "
            value={ this.props.description }
            onChange={ this.onDescriptionChange } />
          <DatePicker
            valid={ this.state.startValid }
            name="start"
            label="Início: "
            displayTimer={ true }
            preSelected={ this.state.start }
            onSelect={ this.onSelectStart } />
          <DatePicker
            valid={ this.state.endValid }
            name="end"
            label="Término: "
            displayTimer={ true }
            preSelected={ this.state.end }
            onSelect={ this.onSelectEnd } />
          <input
            type="button"
            className="btn btn-default"
            value="Salvar"
            onClick={ this.onSubmit } />
        </form>
      </div>
    );
  }
}

export default EventForm;
