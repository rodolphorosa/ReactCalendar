import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
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
    handleSubmit: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = this.getInitialState()
  }

  getInitialState = () => {
    return {
      title: this.props.title ? this.props.title : "",
      local: this.props.local ? this.props.local: "",
      description: this.props.description ? this.props.description : "",
      start: this.props.start ? this.props.start : moment().locale("pt-BR"),
      end: this.props.end ? this.props.end : moment().locale("pt-BR"),
      titleValid: true,
      localValid: true,
      descriptionValid: true,
      startValid: true,
      endValid: true
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.title !== this.props.title) {
      this.setState({ title: nextProps.title })
    }

    if (nextProps.local !== this.props.title) {
      this.setState({ local: this.props.local })
    }

    if (nextProps.description !== this.props.description) {
      this.setState({ description: nextProps.description })
    }

    if (nextProps.start !== this.props.start) {
      this.setState({ start: nextProps.start })
    }

    if (nextProps.end !== this.props.end) {
      this.setState({ end: nextProps.end })
    }
  }

  onSelectStart = (date, event) => {
    this.setState({
      start: date,
      startValid: isStartDateValid(date, this.state.end),
      endValid: isEndDateValid(date, this.state.end)
    });
  }

  onSelectEnd = (date, event) => {
    this.setState({
      end: date,
      endValid: isEndDateValid(this.state.start, date),
      startValid: isEndDateValid(this.state.start, date)
    });
  }

  onTitleChange = (event) => {
    this.setState({
      title: event.target.value,
      titleValid: isTitleValid(event.target.value)
    })
  }

  onLocalChange = (event) => {
    this.setState({
      local: event.target.value
    })
  }

  onDescriptionChange = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  onSubmit = (event) => {
    if (isFormValid(this.state.title, this.state.start, this.state.end))
      this.props.handleSubmit({
        title: this.state.title,
        local: this.state.local,
        description: this.state.description,
        start: this.state.start,
        end: this.state.end
      })
  }

  render() {
    return(
      <form className="event-form">
        <TextInput
          valid={ this.state.titleValid }
          name="title"
          placeholder="Evento sem título"
          value={ this.state.title }
          invalidFieldMessage="Campo obrigatório."
          onChange={ this.onTitleChange } />
        <TextInput
          valid={ true }
          name="local"
          label="Onde: "
          placeholder="Digite um local"
          value={ this.state.local }
          onChange={ this.onLocalChange } />
        <TextArea
          valid={ true }
          name="description"
          label="Descrição: "
          value={ this.state.description }
          onChange={ this.onDescriptionChange } />
        <DatePicker
          valid={ this.state.startValid }
          name="start"
          label="Início: "
          displayTimer={ true }
          preSelected={ this.state.start }
          invalidFieldMessage="Datas devem ser consistentes."
          onSelect={ this.onSelectStart } />
        <DatePicker
          valid={ this.state.endValid }
          name="end"
          label="Término: "
          displayTimer={ true }
          preSelected={ this.state.end }
          invalidFieldMessage="Datas devem ser consistentes."
          onSelect={ this.onSelectEnd } />
        <input
          type="button"
          className="btn btn-default"
          value="Salvar"
          onClick={ this.onSubmit } />
      </form>
    );
  }
}

export default EventForm;
