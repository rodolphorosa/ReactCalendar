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

var EditEvent = function (_Component) {
  _inherits(EditEvent, _Component);

  function EditEvent(props) {
    _classCallCheck(this, EditEvent);

    var _this = _possibleConstructorReturn(this, (EditEvent.__proto__ || Object.getPrototypeOf(EditEvent)).call(this, props));

    _this.getInitialState = function () {
      return {
        title: "",
        description: "",
        local: "",
        start: (0, _moment2.default)().clone().locale("pt-BR"),
        end: (0, _moment2.default)().clone().locale("pt-BR"),
        eventUpdated: true
      };
    };

    _this.handleSubmit = function (data) {
      var url = "/api/events/" + _this.props.match.params.id;
      (0, _axios2.default)({
        url: url,
        method: "put",
        data: data
      }).then(function (response) {
        _this.props.history.push("/events/" + _this.props.match.params.id);
        console.info("Event successfully updated");
      }).catch(function (response) {
        console.error("An error occured");
        _this.setState({ eventUpdated: false });
      });
    };

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(EditEvent, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var url = "/api/events/" + this.props.match.params.id;
      (0, _axios2.default)({
        url: url,
        method: "get"
      }).then(function (response) {
        _this2.setState({
          title: response.data.event.title,
          local: response.data.event.local,
          description: response.data.event.description,
          start: (0, _moment2.default)(response.data.event.start),
          end: (0, _moment2.default)(response.data.event.end)
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "form-container" },
        _react2.default.createElement(
          "div",
          { className: this.state.eventUpdated ? "hidden" : "submission-error-message" },
          "N\xE3o foi poss\xEDvel salvar o evento."
        ),
        _react2.default.createElement(_EventForm2.default, {
          title: this.state.title,
          local: this.state.local,
          description: this.state.description,
          start: this.state.start,
          end: this.state.end,
          handleSubmit: this.handleSubmit })
      );
    }
  }]);

  return EditEvent;
}(_react.Component);

exports.default = EditEvent;