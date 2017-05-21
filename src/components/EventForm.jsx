import React, { Component } from "react";
import PropTypes from "prop-types";
import TextArea from "./TextArea";
import TextInput from "./TextInput";
import DatePicker from "./DatePicker";

class EventForm extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    local: PropTypes.string,
    start: PropTypes.object,
    end: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired,
    handleSelectStart: PropTypes.func.isRequired,
    handleSelectEnd: PropTypes.func.isRequired
  }

  onSelectStart = (date, event) => this.props.handleSelectStart(date, event)

  onSelectEnd = (date, event) => this.props.handleSelectEnd(date, event)

  onInputChange = (event) => this.props.handleInputChange(event)

  onSubmit = (event) => this.props.handleSubmit(event)

  render() {
    return(
      <div>
        <form>
          <TextInput
            name="title"
            placeholder="Evento sem título"
            value={ this.props.title }
            onChange={ this.onInputChange } />
          <TextInput
            name="local"
            label="Onde: "
            placeholder="Digite um local"
            value={ this.props.local }
            onChange={ this.onInputChange } />
          <TextArea
            name="description"
            label="Descrição: "
            value={ this.props.description }
            onChange={ this.onInputChange } />
          <DatePicker
            name="start"
            label="Início: "
            displayTimer={ true }
            preSelected={ this.props.start }
            onSelect={ this.onSelectStart } />
          <DatePicker
            name="end"
            label="Término: "
            displayTimer={ true }
            preSelected={ this.props.end }
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
