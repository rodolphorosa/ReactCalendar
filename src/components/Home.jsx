import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import DatePicker from "./DatePicker";
import CalendarMenu from "./CalendarMenu";
import Navbar from "./Navbar";

const REQUEST_DATE_FORMAT = "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      date: moment().startOf("day")
    };
    this.requestSuccessCallback = this.requestSuccessCallback.bind(this);
    this.requestErrorCallback = this.requestErrorCallback.bind(this);
  }

  componentDidMount() {
    this.requestAllEvents()
  }

  requestSuccessCallback = (date, response) => {
    this.setState({
      events: response.data.events,
      date: date
    })
  }

  requestErrorCallback = (date, error) => {
    this.setState({
      events: [],
      date: date
    })
  }

  requestEventsByParam = (url, date) => {
    axios({
      url: url,
      method: "get"
    }).then((response) => {
      this.requestSuccessCallback(date, response)
    }).catch((error) => {
      this.requestErrorCallback(date, error)
    })
  }

  requestAllEvents = () => {
    this.requestEventsByParam("/api/events", this.state.date);
  }

  requestToday = () => {
    const today = moment().locale("pt-BR").startOf("day");
    const url = "/api/events/date/" + today.format(REQUEST_DATE_FORMAT);
    this.requestEventsByParam(url, today);
  }

  requestEventsByDate = (date) => {
    const url = "/api/events/date/" + date.format(REQUEST_DATE_FORMAT);
    this.requestEventsByParam(url, date);
  }

  requestEventsByWeek = (date) => {
    const url = "/api/events/week/" + date.format(REQUEST_DATE_FORMAT);
    this.requestEventsByParam(url, date);
  }

  requestEventsByMonth = (date) => {
    const url = "/api/events/month/" + date.format(REQUEST_DATE_FORMAT);
    this.requestEventsByParam(url, date);
  }

  onSelect = (date) => {
    this.requestEventsByDate(date)
  }

  renderCalendarMenu() {
    return <CalendarMenu
            date={this.state.date}
            onSelect={this.onSelect}/>

  }

  renderNavbar() {
    return <Navbar
            date={this.state.date}
            requestToday={this.requestToday}
            requestDate={this.requestEventsByDate}
            requestWeek={this.requestEventsByWeek}
            requestMonth={this.requestEventsByMonth} />
  }

  renderEventListMenu() {
    var eventList = this.state.events.map((event) => {
      return(
        <li key={ event._id }>
          <span className="date-span">
            { moment(event.start).locale("pt-BR").format("DD/MM/YYYY") }
          </span>
          <span className="date-span">
            { moment(event.start).locale("pt-BR").format("HH:mm") }
          </span>
          <Link to={`/events/${ event._id }`}>
            { event.title }
          </Link>
        </li>
      );
    });

    return <div className="event-list-menu">
            { this.renderNavbar() }
            <div className="event-list-container">
              <ul className="event-list">{ eventList }</ul>
            </div>
          </div>
  }

  renderNoEventContainer() {
    return <div className="event-list-menu">
            { this.renderNavbar() }
            <div className="no-event-container">
              Não há eventos cadastrados.
            </div>
          </div>
  }

  render() {
    var eventMenu;
    if(this.state.events.length > 0) {
      eventMenu = this.renderEventListMenu();
    } else {
      eventMenu = this.renderNoEventContainer();
    }

    return(
      <div>
        { this.renderCalendarMenu() }
        { eventMenu }
      </div>
    );
  }
}

export default Home;
