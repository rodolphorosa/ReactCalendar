"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _WeekHeader = require("./WeekHeader");

var _WeekHeader2 = _interopRequireDefault(_WeekHeader);

var _Week = require("./Week");

var _Week2 = _interopRequireDefault(_Week);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Month = function (_Component) {
  _inherits(Month, _Component);

  function Month() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Month);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Month.__proto__ || Object.getPrototypeOf(Month)).call.apply(_ref, [this].concat(args))), _this), _this.onSelect = function (day, event) {
      _this.props.onSelect(day, event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Month, [{
    key: "renderMonth",
    value: function renderMonth() {
      var weeks = [];
      var thisWeekStart = this.props.date.clone().startOf("month").startOf("week");
      var i = 0;

      weeks.push(_react2.default.createElement(_WeekHeader2.default, { key: "header" }));

      while (true) {
        weeks.push(_react2.default.createElement(_Week2.default, {
          key: i,
          date: thisWeekStart,
          preSelected: this.props.preSelected,
          month: this.props.date.month(),
          onSelect: this.onSelect }));

        thisWeekStart = thisWeekStart.clone().add(1, "weeks");

        i++;

        if (thisWeekStart > this.props.date.clone().endOf("month")) break;
      }

      return weeks;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "month" },
        this.renderMonth()
      );
    }
  }]);

  return Month;
}(_react.Component);

Month.propTypes = {
  date: _propTypes2.default.object.isRequired
};
exports.default = Month;