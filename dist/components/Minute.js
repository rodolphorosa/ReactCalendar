"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Minute = function (_Component) {
  _inherits(Minute, _Component);

  function Minute() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Minute);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Minute.__proto__ || Object.getPrototypeOf(Minute)).call.apply(_ref, [this].concat(args))), _this), _this.increase = function (event) {
      _this.props.increase(event);
    }, _this.decrease = function (event) {
      _this.props.decrease(event);
    }, _this.onChange = function (event) {
      if (!isNaN(_this.input.value)) _this.props.onChange(_this.input, event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Minute, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { className: "selector" },
        _react2.default.createElement(
          "div",
          {
            className: "up-down-button",
            onClick: this.increase },
          "\u25B4"
        ),
        _react2.default.createElement("input", {
          className: "form-control input-time",
          ref: function ref(input) {
            _this2.input = input;
          },
          value: this.props.date.format("mm"),
          size: 5,
          onChange: this.onChange }),
        _react2.default.createElement(
          "div",
          {
            className: "up-down-button",
            onClick: this.decrease },
          "\u25BE"
        )
      );
    }
  }]);

  return Minute;
}(_react.Component);

Minute.propTypes = {
  date: _propTypes2.default.object.isRequired
};
exports.default = Minute;