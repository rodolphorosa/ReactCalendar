"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Day = require("./Day");

var _Day2 = _interopRequireDefault(_Day);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Week = function (_Component) {
  _inherits(Week, _Component);

  function Week() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Week);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Week.__proto__ || Object.getPrototypeOf(Week)).call.apply(_ref, [this].concat(args))), _this), _this.onSelect = function (day, event) {
      _this.props.onSelect(day, event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Week, [{
    key: "renderWeek",
    value: function renderWeek() {
      var _this2 = this;

      var startOfWeek = this.props.date.clone().startOf("week");
      var days = [];
      return days.concat([0, 1, 2, 3, 4, 5, 6].map(function (offset) {
        var date = startOfWeek.clone().add(offset, "days");
        return _react2.default.createElement(_Day2.default, {
          key: offset,
          date: date,
          preSelected: _this2.props.preSelected,
          month: _this2.props.month,
          onSelect: _this2.onSelect.bind(_this2, date) });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        this.renderWeek()
      );
    }
  }]);

  return Week;
}(_react.Component);

Week.propTypes = {
  date: _propTypes2.default.object.isRequired,
  month: _propTypes2.default.number
};
exports.default = Week;