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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddEvent = function (_Component) {
  _inherits(AddEvent, _Component);

  function AddEvent(props) {
    _classCallCheck(this, AddEvent);

    var _this = _possibleConstructorReturn(this, (AddEvent.__proto__ || Object.getPrototypeOf(AddEvent)).call(this, props));

    _this.getInitialState = function () {
      return {
        eventCreated: true
      };
    };

    _this.handleSubmit = function (data) {
      (0, _axios2.default)({
        url: "/api/event",
        method: "post",
        data: data
      }).then(function (response) {
        _this.props.history.push("/");
        console.info("Event successfully saved!");
      }).catch(function (response) {
        console.error("Could not save event!");
        _this.setState({ eventCreated: false });
      });
    };

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(AddEvent, [{
    key: "render",
    value: function render() {
      var now = (0, _moment2.default)().clone().locale("pt-BR").seconds(0).milliseconds(0);
      return _react2.default.createElement(
        "div",
        { className: "form-container" },
        _react2.default.createElement(
          "div",
          { className: this.state.eventCreated ? "hidden" : "submission-error-message" },
          "N\xE3o foi poss\xEDvel salvar o evento."
        ),
        _react2.default.createElement(_EventForm2.default, {
          start: now,
          end: now.clone().add(2, "hours"),
          handleSubmit: this.handleSubmit })
      );
    }
  }]);

  return AddEvent;
}(_react.Component);

exports.default = AddEvent;