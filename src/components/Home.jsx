import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import DatePicker from "./DatePicker";
import Calendar from "./Calendar";

const SideBar = ({onSelect}) => (
  <div className="sidebar">
    <Calendar onSelect={onSelect} />
  </div>
);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    // this.requestEventsByDate(moment().locale("pt-BR"))
    this.requestAllEvents()
  }

  requestAllEvents = () => {
    axios({
      url: "/api/events",
      method: "get"
    }).then((response) => {
      this.setState({
        events: response.data.events
      })
    })
  }

  requestEventsByDate = (date) => {
    var url = "/api/events/date/" + date.format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    axios({
      url: url,
      method: "get"
    }).then((response) => {
      this.setState({ events: response.data.events })
    }).catch((error) => {
      this.setState({ events: [] })
    })
  }

  onSelect = (date) => {
    this.requestEventsByDate(date)
  }

  render() {
    if(this.state.events.length > 0) {
      var eventList = this.state.events.map((event) => {
        return(
          <li key={ event._id }><Link to={`/events/${ event._id }`}>
            { event.title }
          </Link></li>
        );
      });

      return(
        <div>
          <SideBar onSelect={ this.onSelect } />
          <div>
            <ul>{ eventList }</ul>
          </div>
        </div>
      );

    } else {
      return (
        <div>
          <SideBar />
          <div>
            <p>Não há eventos cadastrados.</p>
          </div>
        </div>
      );
    }
  }
}

export default Home;
