"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _MonthHeader = require("./MonthHeader");

var _MonthHeader2 = _interopRequireDefault(_MonthHeader);

var _Month = require("./Month");

var _Month2 = _interopRequireDefault(_Month);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

    _this.getInitialState = function () {
      return {
        date: _this.props.preSelected ? _this.props.preSelected : (0, _moment2.default)().locale("pt-BR")
      };
    };

    _this.onSelect = function (day, event) {
      _this.setState({ date: day });
      _this.props.onSelect(day, event);
    };

    _this.onIncreaseMonth = function () {
      var nextMonth = _this.state.date.clone().add(1, "month");
      _this.setState({ date: nextMonth });
    };

    _this.onDecreaseMonth = function () {
      var previousMonth = _this.state.date.clone().subtract(1, "month");
      _this.setState({ date: previousMonth });
    };

    _this.onIncreaseYear = function () {
      var nextYear = _this.state.date.clone().add(1, "year");
      _this.setState({ date: nextYear });
    };

    _this.onDecreaseYear = function () {
      var previousYear = _this.state.date.clone().subtract(1, "year");
      _this.setState({ date: previousYear });
    };

    _this.toggle = function (event) {
      _this.props.onToggle(event);
    };

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(Calendar, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.preSelected !== this.props.preSelected) {
        this.setState({ date: nextProps.preSelected });
      }
    }
  }, {
    key: "renderCalendar",
    value: function renderCalendar() {
      return _react2.default.createElement(
        "div",
        { className: "calendar-container" },
        _react2.default.createElement(
          "div",
          { className: "calendar-header" },
          _react2.default.createElement(
            "div",
            {
              className: "right-left-button",
              onClick: this.onDecreaseYear },
            "\xAB"
          ),
          _react2.default.createElement(
            "div",
            {
              className: "right-left-button",
              onClick: this.onDecreaseMonth },
            "\u2039"
          ),
          _react2.default.createElement(_MonthHeader2.default, { date: this.state.date }),
          _react2.default.createElement(
            "div",
            {
              className: "right-left-button",
              onClick: this.onIncreaseMonth },
            "\u203A"
          ),
          _react2.default.createElement(
            "div",
            {
              className: "right-left-button",
              onClick: this.onIncreaseYear },
            "\xBB"
          )
        ),
        _react2.default.createElement(_Month2.default, {
          date: this.state.date,
          preSelected: this.props.preSelected,
          onSelect: this.onSelect })
      );
    }
  }, {
    key: "renderTimer",
    value: function renderTimer() {
      return _react2.default.createElement(
        "div",
        {
          className: this.props.displayTimer ? "toggleButton" : "hidden",
          onClick: this.toggle },
        this.state.date.format("HH:mm")
      );
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "calendar-wrapper" },
        this.renderCalendar(),
        this.renderTimer()
      );
    }
  }]);

  return Calendar;
}(_react.Component);

Calendar.propTypes = {
  preSelected: _propTypes2.default.object
};
exports.default = Calendar;