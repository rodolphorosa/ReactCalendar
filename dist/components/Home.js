"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _DatePicker = require("./DatePicker");

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _CalendarMenu = require("./CalendarMenu");

var _CalendarMenu2 = _interopRequireDefault(_CalendarMenu);

var _Navbar = require("./Navbar");

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var REQUEST_DATE_FORMAT = "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]";

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.requestSuccessCallback = function (date, response) {
      _this.setState({
        events: response.data.events,
        date: date
      });
    };

    _this.requestErrorCallback = function (date, error) {
      _this.setState({
        events: [],
        date: date
      });
    };

    _this.requestEventsByParam = function (url, date) {
      (0, _axios2.default)({
        url: url,
        method: "get"
      }).then(function (response) {
        _this.requestSuccessCallback(date, response);
      }).catch(function (error) {
        _this.requestErrorCallback(date, error);
      });
    };

    _this.requestAllEvents = function () {
      _this.requestEventsByParam("/api/events", _this.state.date);
    };

    _this.requestToday = function () {
      var today = (0, _moment2.default)().locale("pt-BR").startOf("day");
      var url = "/api/events/date/" + today.format(REQUEST_DATE_FORMAT);
      _this.requestEventsByParam(url, today);
    };

    _this.requestEventsByDate = function (date) {
      var url = "/api/events/date/" + date.format(REQUEST_DATE_FORMAT);
      _this.requestEventsByParam(url, date);
    };

    _this.requestEventsByWeek = function (date) {
      var url = "/api/events/week/" + date.format(REQUEST_DATE_FORMAT);
      _this.requestEventsByParam(url, date);
    };

    _this.requestEventsByMonth = function (date) {
      var url = "/api/events/month/" + date.format(REQUEST_DATE_FORMAT);
      _this.requestEventsByParam(url, date);
    };

    _this.onSelect = function (date) {
      _this.requestEventsByDate(date);
    };

    _this.state = {
      events: [],
      date: (0, _moment2.default)().startOf("day")
    };
    _this.requestSuccessCallback = _this.requestSuccessCallback.bind(_this);
    _this.requestErrorCallback = _this.requestErrorCallback.bind(_this);
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.requestAllEvents();
    }
  }, {
    key: "renderCalendarMenu",
    value: function renderCalendarMenu() {
      return _react2.default.createElement(_CalendarMenu2.default, {
        date: this.state.date,
        onSelect: this.onSelect });
    }
  }, {
    key: "renderNavbar",
    value: function renderNavbar() {
      return _react2.default.createElement(_Navbar2.default, {
        date: this.state.date,
        requestToday: this.requestToday,
        requestDate: this.requestEventsByDate,
        requestWeek: this.requestEventsByWeek,
        requestMonth: this.requestEventsByMonth });
    }
  }, {
    key: "renderEventListMenu",
    value: function renderEventListMenu() {
      var eventList = this.state.events.map(function (event) {
        return _react2.default.createElement(
          "li",
          { key: event._id },
          _react2.default.createElement(
            "span",
            { className: "date-span" },
            (0, _moment2.default)(event.start).locale("pt-BR").format("DD/MM/YYYY")
          ),
          _react2.default.createElement(
            "span",
            { className: "date-span" },
            (0, _moment2.default)(event.start).locale("pt-BR").format("HH:mm")
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/events/" + event._id },
            event.title
          )
        );
      });

      return _react2.default.createElement(
        "div",
        { className: "event-list-menu" },
        this.renderNavbar(),
        _react2.default.createElement(
          "div",
          { className: "event-list-container" },
          _react2.default.createElement(
            "ul",
            { className: "event-list" },
            eventList
          )
        )
      );
    }
  }, {
    key: "renderNoEventContainer",
    value: function renderNoEventContainer() {
      return _react2.default.createElement(
        "div",
        { className: "event-list-menu" },
        this.renderNavbar(),
        _react2.default.createElement(
          "div",
          { className: "no-event-container" },
          "N\xE3o h\xE1 eventos cadastrados."
        )
      );
    }
  }, {
    key: "render",
    value: function render() {
      var eventMenu;
      if (this.state.events.length > 0) {
        eventMenu = this.renderEventListMenu();
      } else {
        eventMenu = this.renderNoEventContainer();
      }

      return _react2.default.createElement(
        "div",
        { className: "home" },
        this.renderCalendarMenu(),
        eventMenu
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;