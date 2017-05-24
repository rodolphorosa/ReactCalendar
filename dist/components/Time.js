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

var _Minute = require("./Minute");

var _Minute2 = _interopRequireDefault(_Minute);

var _Hour = require("./Hour");

var _Hour2 = _interopRequireDefault(_Hour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Time = function (_Component) {
  _inherits(Time, _Component);

  function Time(props) {
    _classCallCheck(this, Time);

    var _this = _possibleConstructorReturn(this, (Time.__proto__ || Object.getPrototypeOf(Time)).call(this, props));

    _this.getInitialState = function () {
      return {
        date: _this.props.date ? _this.props.date : (0, _moment2.default)().locale("pt-BR").hours()
      };
    };

    _this.onIncreaseMinute = function (event) {
      _this.props.onIncreaseMinute(event);
    };

    _this.onDecreaseMinute = function (event) {
      _this.props.onDecreaseMinute(event);
    };

    _this.onIncreaseHour = function (event) {
      _this.props.onIncreaseHour(event);
    };

    _this.onDecreaseHour = function (event) {
      _this.props.onDecreaseHour(event);
    };

    _this.onChangeHour = function (input, event) {
      _this.props.onChangeHour(input, event);
    };

    _this.onChangeMinutes = function (input, event) {
      _this.props.onChangeMinutes(input, event);
    };

    _this.toggle = function (event) {
      _this.props.onToggle(event);
    };

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(Time, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.date !== this.props.date) {
        this.setState({ date: nextProps.date });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "time-wrapper" },
        _react2.default.createElement(
          "div",
          {
            className: "toggleButton",
            onClick: this.toggle },
          this.state.date.format("DD/MM/YYYY")
        ),
        _react2.default.createElement(
          "div",
          { className: "time-container" },
          _react2.default.createElement(_Hour2.default, {
            date: this.state.date,
            increase: this.onIncreaseHour,
            decrease: this.onDecreaseHour,
            onChange: this.onChangeHour }),
          _react2.default.createElement(
            "div",
            { className: "separator" },
            ":"
          ),
          _react2.default.createElement(_Minute2.default, {
            date: this.state.date,
            increase: this.onIncreaseMinute,
            decrease: this.onDecreaseMinute,
            onChange: this.onChangeMinutes })
        )
      );
    }
  }]);

  return Time;
}(_react.Component);

Time.propTypes = {
  date: _propTypes2.default.object.isRequired
};
exports.default = Time;