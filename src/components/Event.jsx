import React, { Component } from "react";
import axios from "axios";

class EventDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get(this.props.url)
    .then(function(response) {
      /* do something */
    }.bind(this));
  }

  render() {

  }
}
