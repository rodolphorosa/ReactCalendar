"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _TextArea = require("./TextArea");

var _TextArea2 = _interopRequireDefault(_TextArea);

var _TextInput = require("./TextInput");

var _TextInput2 = _interopRequireDefault(_TextInput);

var _DatePicker = require("./DatePicker");

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _validation = require("./validation.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventForm = function (_Component) {
  _inherits(EventForm, _Component);

  function EventForm(props) {
    _classCallCheck(this, EventForm);

    var _this = _possibleConstructorReturn(this, (EventForm.__proto__ || Object.getPrototypeOf(EventForm)).call(this, props));

    _this.getInitialState = function () {
      return {
        title: _this.props.title ? _this.props.title : "",
        local: _this.props.local ? _this.props.local : "",
        description: _this.props.description ? _this.props.description : "",
        start: _this.props.start ? _this.props.start : (0, _moment2.default)().locale("pt-BR"),
        end: _this.props.end ? _this.props.end : (0, _moment2.default)().locale("pt-BR"),
        titleValid: true,
        localValid: true,
        descriptionValid: true,
        startValid: true,
        endValid: true
      };
    };

    _this.onSelectStart = function (date, event) {
      _this.setState({
        start: date,
        startValid: (0, _validation.isStartDateValid)(date, _this.state.end),
        endValid: (0, _validation.isEndDateValid)(date, _this.state.end)
      });
    };

    _this.onSelectEnd = function (date, event) {
      _this.setState({
        end: date,
        endValid: (0, _validation.isEndDateValid)(_this.state.start, date),
        startValid: (0, _validation.isEndDateValid)(_this.state.start, date)
      });
    };

    _this.onTitleChange = function (event) {
      _this.setState({
        title: event.target.value,
        titleValid: (0, _validation.isTitleValid)(event.target.value)
      });
    };

    _this.onLocalChange = function (event) {
      _this.setState({
        local: event.target.value
      });
    };

    _this.onDescriptionChange = function (event) {
      _this.setState({
        description: event.target.value
      });
    };

    _this.onSubmit = function (event) {
      if ((0, _validation.isFormValid)(_this.state.title, _this.state.start, _this.state.end)) _this.props.handleSubmit({
        title: _this.state.title,
        local: _this.state.local,
        description: _this.state.description,
        start: _this.state.start,
        end: _this.state.end
      });
    };

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(EventForm, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.title !== this.props.title) {
        this.setState({ title: nextProps.title });
      }

      if (nextProps.local !== this.props.local) {
        this.setState({ local: nextProps.local });
      }

      if (nextProps.description !== this.props.description) {
        this.setState({ description: nextProps.description });
      }

      if (nextProps.start !== this.props.start) {
        this.setState({ start: nextProps.start });
      }

      if (nextProps.end !== this.props.end) {
        this.setState({ end: nextProps.end });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "form",
        { className: "event-form" },
        _react2.default.createElement(_TextInput2.default, {
          valid: this.state.titleValid,
          name: "title",
          placeholder: "Evento sem t\xEDtulo",
          value: this.state.title,
          invalidFieldMessage: "Campo obrigat\xF3rio.",
          onChange: this.onTitleChange }),
        _react2.default.createElement(_TextInput2.default, {
          valid: true,
          name: "local",
          label: "Onde: ",
          placeholder: "Digite um local",
          value: this.state.local,
          onChange: this.onLocalChange }),
        _react2.default.createElement(_TextArea2.default, {
          valid: true,
          name: "description",
          label: "Descri\xE7\xE3o: ",
          value: this.state.description,
          onChange: this.onDescriptionChange }),
        _react2.default.createElement(_DatePicker2.default, {
          valid: this.state.startValid,
          name: "start",
          label: "In\xEDcio: ",
          displayTimer: true,
          preSelected: this.state.start,
          invalidFieldMessage: "Datas devem ser consistentes.",
          onSelect: this.onSelectStart }),
        _react2.default.createElement(_DatePicker2.default, {
          valid: this.state.endValid,
          name: "end",
          label: "T\xE9rmino: ",
          displayTimer: true,
          preSelected: this.state.end,
          invalidFieldMessage: "Datas devem ser consistentes.",
          onSelect: this.onSelectEnd }),
        _react2.default.createElement("input", {
          type: "button",
          className: "btn btn-default",
          value: "Salvar",
          onClick: this.onSubmit })
      );
    }
  }]);

  return EventForm;
}(_react.Component);

EventForm.propTypes = {
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  local: _propTypes2.default.string,
  start: _propTypes2.default.object,
  end: _propTypes2.default.object,
  handleSubmit: _propTypes2.default.func.isRequired
};
exports.default = EventForm;