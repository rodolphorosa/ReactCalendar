"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _EventForm = require("./EventForm");

var _EventForm2 = _interopRequireDefault(_EventForm);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventCreate = function (_Component) {
  _inherits(EventCreate, _Component);

  function EventCreate(props) {
    _classCallCheck(this, EventCreate);

    var _this = _possibleConstructorReturn(this, (EventCreate.__proto__ || Object.getPrototypeOf(EventCreate)).call(this, props));

    _this.getInitialState = function () {
      var now = (0, _moment2.default)().clone().locale("pt-BR").seconds(0).milliseconds(0);
      return {
        title: "",
        description: "",
        local: "",
        start: now,
        end: now.clone().add(1, "hours")
      };
    };

    _this.handleInputChange = function (event) {
      return _this.setState(_defineProperty({}, event.target.name, event.target.value));
    };

    _this.handleSelectStart = function (date) {
      return _this.setState({ start: date });
    };

    _this.handleSelectEnd = function (date) {
      return _this.setState({ end: date });
    };

    _this.handleSubmit = function (event) {
      (0, _axios2.default)({
        url: "/api/event",
        method: "post",
        data: {
          title: _this.state.title,
          local: _this.state.local,
          description: _this.state.description,
          start: _this.state.start,
          end: _this.state.end
        }
      }).then(function (response) {
        _this.props.history.push("/");
        console.info("Event successfully saved!");
      }).catch(function (response) {
        console.error("Could not save event!");
      });
    };

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(EventCreate, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_EventForm2.default, {
        start: this.state.start,
        end: this.state.end,
        handleInputChange: this.handleInputChange,
        handleSelectStart: this.handleSelectStart,
        handleSelectEnd: this.handleSelectEnd,
        handleSubmit: this.handleSubmit });
    }
  }]);

  return EventCreate;
}(_react.Component);

exports.default = EventCreate;