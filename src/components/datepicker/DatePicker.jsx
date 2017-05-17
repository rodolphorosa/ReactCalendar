import React, { Component } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import Calendar from "./Calendar";
import "./style.css"

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    let date = this.props.preSelected ? this.props.preSelected : moment().clone().locale("pt-BR");
    return {
      selected: date,
      open: false
    }
  }

  componentWillMount() {
    document.addEventListener("click", this.onClickOutside, false)
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.onClickOutside, false)
  }

  onClickOutside = (event) => {
    if(!ReactDOM.findDOMNode(this).contains(event.target)) this.setOpen(false)
  }

  onSelect = (date, event) => {
    this.setState({ selected: date })
    if(this.props.onSelect) this.props.onSelect(date)
  }

  onClose = (event) => this.setOpen(false)

  setOpen = (open) => {
    this.setState({ open: open })
  }

  onInputClick = (event) => {
    if(!this.state.open) this.setOpen(true);
    else this.setOpen(false);
  }

  render() {
    return(
      <div>
        <input
          className="input"
          type="text"
          ref={ (input) => { this.input = input; } }
          value={ this.state.selected.format("DD/MM/YYYY HH:mm") }
          readOnly={ true }
          onClick={ this.onInputClick.bind(this) } />
        <div className={ this.state.open ? "" : "hidden" }>
          <Calendar
            preSelected={ this.state.selected }
            onSelect={ this.onSelect }
            onClose={ this.onClose } />
        </div>
      </div>
    );
  }
}

export default DatePicker;
