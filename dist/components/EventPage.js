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

var EventPage = function (_Component) {
  _inherits(EventPage, _Component);

  function EventPage(props) {
    _classCallCheck(this, EventPage);

    var _this = _possibleConstructorReturn(this, (EventPage.__proto__ || Object.getPrototypeOf(EventPage)).call(this, props));

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

  _createClass(EventPage, [{
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
        null,
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            "strong",
            null,
            "Evento:"
          ),
          event.title
        ),
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            "strong",
            null,
            "Descri\xE7\xE3o:"
          ),
          event.description
        ),
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            "strong",
            null,
            "Local:"
          ),
          event.local
        ),
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            "strong",
            null,
            "In\xEDcio:"
          ),
          (0, _moment2.default)(this.state.event.start).format("DD/MM/YYYY HH:mm")
        ),
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            "strong",
            null,
            "T\xE9rmino:"
          ),
          (0, _moment2.default)(this.state.event.end).format("DD/MM/YYYY HH:mm")
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "button",
            { className: "btn btn-default" },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/events/edit/" + this.props.match.params.id },
              "Editar"
            )
          ),
          _react2.default.createElement(
            "button",
            { className: "btn btn-default", onClick: this.requestDeleteEvent },
            "Excluir"
          )
        )
      );
    }
  }]);

  return EventPage;
}(_react.Component);

exports.default = EventPage;