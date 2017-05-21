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
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onSelectStart: PropTypes.func.isRequired,
    onSelectEnd: PropTypes.func.isRequired
  }

  onSelectStart = (date, event) => this.props.onSelectStart(date, event)

  onSelectEnd = (date, event) => this.props.onSelectEnd(date, event)

  onChange = (event) => this.props.onChange(event)

  onSubmit = (event) => this.props.onSubmit(event)

  render() {
    return(
      <div>
        <form>
          <TextInput
            name="title"
            placeholder="Evento sem título"
            value={ this.props.title }
            onChange={ this.onChange } />
          <TextInput
            name="local"
            label="Onde: "
            placeholder="Digite um local"
            value={ this.props.local }
            onChange={ this.onChange } />
          <TextArea
            name="description"
            label="Descrição: "
            value={ this.props.description }
            onChange={ this.onChange } />
          <DatePicker
            name="start"
            label="Início: "
            preSelected={ this.props.start }
            onSelect={ this.onSelectStart } />
          <DatePicker
            name="end"
            label="Término: "
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
