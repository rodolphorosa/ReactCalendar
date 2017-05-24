"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Event = function (_Component) {
  _inherits(Event, _Component);

  function Event(props) {
    _classCallCheck(this, Event);

    var _this = _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, props));

    _this.requestDeleteEvent = function () {
      var url = "/api/events/" + _this.props.match.params.id;
      (0, _axios2.default)({
        url: url,
        method: "delete"
      }).then(function (response) {
        _this.props.history.push("/");
        console.info("Event successfully deleted!");
      }).catch(function (error) {
        console.error("Could not delete event!");
      });
    };

    _this.state = { event: [] };
    return _this;
  }

  _createClass(Event, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var url = "/api/events/" + this.props.match.params.id;
      (0, _axios2.default)({
        url: url,
        method: "get"
      }).then(function (response) {
        _this2.setState({ event: response.data.event });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var event = this.state.event;
      return _react2.default.createElement(
        "div",
        { className: "event-detail" },
        _react2.default.createElement(
          "div",
          { className: "event-name-div" },
          _react2.default.createElement(
            "h2",
            null,
            event.title
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "event-table-container" },
          _react2.default.createElement(
            "table",
            { className: "event-table" },
            _react2.default.createElement(
              "tbody",
              { className: "event-tbody" },
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "event-field-name" },
                  "Onde"
                ),
                _react2.default.createElement(
                  "td",
                  { className: "event-field-value" },
                  event.local
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "event-field-name" },
                  "Descri\xE7\xE3o"
                ),
                _react2.default.createElement(
                  "td",
                  { className: "event-field-value" },
                  event.description
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "event-field-name" },
                  "In\xEDcio"
                ),
                _react2.default.createElement(
                  "td",
                  { className: "event-field-value" },
                  (0, _moment2.default)(event.start).locale("pt-BR").format("dddd, LLL")
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "event-field-name" },
                  "T\xE9rmino"
                ),
                _react2.default.createElement(
                  "td",
                  { className: "event-field-value" },
                  (0, _moment2.default)(event.end).locale("pt-BR").format("dddd, LLL")
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/events/edit/" + this.props.match.params.id },
            _react2.default.createElement(
              "button",
              { className: "btn btn-default btn-event" },
              "Editar"
            )
          ),
          _react2.default.createElement(
            "button",
            {
              className: "btn btn-default btn-event",
              onClick: this.requestDeleteEvent },
            "Excluir"
          )
        )
      );
    }
  }]);

  return Event;
}(_react.Component);

exports.default = Event;