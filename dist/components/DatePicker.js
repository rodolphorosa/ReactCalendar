"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _Calendar = require("./Calendar");

var _Calendar2 = _interopRequireDefault(_Calendar);

var _Time = require("./Time");

var _Time2 = _interopRequireDefault(_Time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePicker = function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

    _this.getInitialState = function () {
      return {
        selected: _this.props.preSelected ? _this.props.preSelected : (0, _moment2.default)().locale("pt-BR"),
        calendarOpen: false,
        timerOpen: false,
        valid: true
      };
    };

    _this.onClickOutside = function (event) {
      if (!_reactDom2.default.findDOMNode(_this).contains(event.target)) {
        _this.setCalendarOpen(false);
        _this.setTimerOpen(false);
      }
    };

    _this.onSelect = function (date, event) {
      var selected = _this.state.selected.clone().set({
        "year": date.year(),
        "month": date.month(),
        "date": date.date()
      });
      _this.setState({ selected: selected });
      _this.props.onSelect(selected);
    };

    _this.onIncreaseHour = function (event) {
      var increased = _this.state.selected.hours() < 23 ? _this.state.selected.clone().add(1, "hours") : _this.state.selected.clone().hours(0);
      _this.setState({ selected: increased });
      _this.props.onSelect(increased);
    };

    _this.onDecreaseHour = function (event) {
      var decreased = _this.state.selected.hours() > 0 ? _this.state.selected.clone().subtract(1, "hours") : _this.state.selected.clone().hours(23);
      _this.setState({ selected: decreased });
      _this.props.onSelect(decreased);
    };

    _this.onIncreaseMinute = function (event) {
      var increased = _this.state.selected.minutes() < 59 ? _this.state.selected.clone().add(1, "minutes") : _this.state.selected.clone().minutes(0);
      _this.setState({ selected: increased });
      _this.props.onSelect(increased);
    };

    _this.onDecreaseMinute = function (event) {
      var decreased = _this.state.selected.minutes() > 0 ? _this.state.selected.clone().subtract(1, "minutes") : _this.state.selected.clone().minutes(59);
      _this.setState({ selected: decreased });
      _this.props.onSelect(decreased);
    };

    _this.onChangeHour = function (input, event) {
      var date = input.value <= 23 ? _this.state.selected.clone().hours(input.value) : _this.state.selected.clone().hours(23);
      _this.setState({ selected: date });
      _this.props.onSelect(date);
    };

    _this.onChangeMinutes = function (input, event) {
      var date = input.value <= 59 ? _this.state.selected.clone().minutes(input.value) : _this.state.selected.clone().minutes(59);
      _this.setState({ selected: date });
      _this.props.onSelect(date);
    };

    _this.onInputClick = function (event) {
      if (_this.state.calendarOpen || _this.state.timerOpen) {
        _this.setCalendarOpen(false);
        _this.setTimerOpen(false);
      } else {
        _this.setCalendarOpen(true);
      }
    };

    _this.setCalendarOpen = function (open) {
      return _this.setState({ calendarOpen: open });
    };

    _this.setTimerOpen = function (open) {
      return _this.setState({ timerOpen: open });
    };

    _this.toggleCalendar = function (event) {
      return _this.setCalendarOpen(!_this.state.calendarOpen);
    };

    _this.toggleTimer = function (event) {
      return _this.setTimerOpen(!_this.state.timerOpen);
    };

    _this.onToggle = function (event) {
      _this.toggleCalendar(event);
      _this.toggleTimer(event);
    };

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(DatePicker, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      document.addEventListener("click", this.onClickOutside, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("click", this.onClickOutside, false);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.preSelected !== this.props.preSelected) {
        this.setState({ selected: nextProps.preSelected });
      }

      if (nextProps.valid !== this.props.valid) {
        this.setState({ valid: nextProps.valid });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var format = this.props.format ? this.props.format : "DD/MM/YYYY HH:mm";
      var classes = (0, _classnames2.default)({
        "form-control": true,
        "custom-input-text": true,
        "invalid-date": !this.state.valid
      });
      return _react2.default.createElement(
        "div",
        { className: "form-group datepicker" },
        _react2.default.createElement(
          "div",
          { className: "input-container" },
          _react2.default.createElement(
            "label",
            { htmlFor: this.props.name },
            this.props.label
          ),
          _react2.default.createElement("input", {
            className: classes,
            name: this.props.name,
            type: "text",
            ref: function ref(input) {
              _this2.input = input;
            },
            value: this.state.selected.format(format),
            readOnly: true,
            onClick: this.onInputClick.bind(this) }),
          _react2.default.createElement(
            "div",
            { className: this.state.valid ? "hidden" : "invalid-field-message" },
            this.props.invalidFieldMessage
          ),
          _react2.default.createElement(
            "div",
            { className: this.state.calendarOpen ? 'absolute' : 'hidden' },
            _react2.default.createElement(_Calendar2.default, {
              preSelected: this.state.selected,
              onSelect: this.onSelect,
              onToggle: this.onToggle,
              displayTimer: this.props.displayTimer })
          ),
          _react2.default.createElement(
            "div",
            { className: this.state.timerOpen ? 'absolute' : 'hidden' },
            _react2.default.createElement(_Time2.default, {
              date: this.state.selected,
              onIncreaseMinute: this.onIncreaseMinute,
              onDecreaseMinute: this.onDecreaseMinute,
              onIncreaseHour: this.onIncreaseHour,
              onDecreaseHour: this.onDecreaseHour,
              onChangeHour: this.onChangeHour,
              onChangeMinutes: this.onChangeMinutes,
              onToggle: this.onToggle })
          )
        )
      );
    }
  }]);

  return DatePicker;
}(_react.Component);

DatePicker.propTypes = {
  name: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string,
  format: _propTypes2.default.string,
  preSelected: _propTypes2.default.object,
  displayTimer: _propTypes2.default.bool,
  onSelect: _propTypes2.default.func.isRequired
};
exports.default = DatePicker;