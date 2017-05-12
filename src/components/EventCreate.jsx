import React, { Component } from "react";
import axios from "axios";

class EventCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      local: "",
      start: "",
      end: ""
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  onSubmit(event) {
    event.preventDefault();
    axios.post("/api/event", {
      title: this.state.title,
      local: this.state.local,
      description: this.state.description,
      start: new Date("2017/05/11T15:47"),
      end: new Date("2017/05/11T16:30")
    })
    .then(function(response) {
      console.log("Event succesfully saved!");
    })
    .catch(function(error){
      console.log("An error occured!");
    });
  }

  foo(event) {
    console.log(event.target.value);
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
        <button type="submit">Click</button>
      </form>
    );
  }
}

export default EventCreate;
