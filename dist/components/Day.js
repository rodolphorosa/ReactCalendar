"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Day = function (_Component) {
  _inherits(Day, _Component);

  function Day() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Day);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Day.__proto__ || Object.getPrototypeOf(Day)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      _this.props.onSelect(event);
    }, _this.isToday = function () {
      return (0, _moment2.default)().isSame(_this.props.date, "day");
    }, _this.isOutOfMonth = function () {
      return _this.props.month !== _this.props.date.month();
    }, _this.isPreSelected = function () {
      return _this.props.preSelected && _this.props.date.isSame(_this.props.preSelected, "day");
    }, _this.isSunday = function () {
      return _this.props.date.weekday() == 0 && !_this.isOutOfMonth();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Day, [{
    key: "render",
    value: function render() {
      var classes = (0, _classnames2.default)({
        "sunday": this.isSunday(),
        "day-div": !this.isToday(),
        "today-div": this.isToday(),
        "out-of-month-div": this.isOutOfMonth(),
        "pre-selected-div": this.isPreSelected()
      });

      return _react2.default.createElement(
        "div",
        {
          className: classes,
          onClick: this.handleClick },
        this.props.date.date()
      );
    }
  }]);

  return Day;
}(_react.Component);

Day.propTypes = {
  date: _propTypes2.default.object.isRequired,
  month: _propTypes2.default.number
};
exports.default = Day;