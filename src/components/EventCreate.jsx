import React, { Component } from "react";
import DatePicker from "./datepicker/DatePicker";
import axios from "axios";

class EventCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      local: "",
      start: [],
      end: []
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  onSelectStart(date, event) {
    this.setState({ start: date })
  }

  onSelectEnd(date, event) {
    this.setState({ end: date })
  }

  onSubmit(event) {
    event.preventDefault();
    axios.post("/api/event", {
      title: this.state.title,
      local: this.state.local,
      description: this.state.description,
      start: this.state.start,
      end: this.state.end
    })
    .then(function(response) {
      console.log("Event succesfully saved!");
    })
    .catch(function(error){
      console.log("An error occured!");
    });
  }

  render() {
    return(
      <form onSubmit={ this.onSubmit }>
        <div>
          <label htmlFor="title">Título: </label>
          <input type="text" name="title" required
            value={ this.state.title } onChange={ this.onChange }/>
        </div>
        <div>
          <label htmlFor="local">Local: </label>
          <input type="text" name="local" required
            value={ this.state.local } onChange={ this.onChange }/>
        </div>
        <div>
          <label htmlFor="description">Descrição: </label>
          <textarea name="description" required
            value={ this.state.description } onChange={ this.onChange }/>
        </div>
        <DatePicker onSelect={ (date) => this.onSelectStart(date) }/>
        <button type="submit">Click</button>
      </form>
    );
  }
}

export default EventCreate;
