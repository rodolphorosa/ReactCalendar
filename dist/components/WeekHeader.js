"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WeekHeader = function (_Component) {
  _inherits(WeekHeader, _Component);

  function WeekHeader() {
    _classCallCheck(this, WeekHeader);

    return _possibleConstructorReturn(this, (WeekHeader.__proto__ || Object.getPrototypeOf(WeekHeader)).apply(this, arguments));
  }

  _createClass(WeekHeader, [{
    key: "render",
    value: function render() {
      var classes = (0, _classnames2.default)({
        "week-name-div": true,
        "sunday": true
      });
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { key: 0, className: classes },
          "D"
        ),
        _react2.default.createElement(
          "div",
          { key: 1, className: "week-name-div" },
          "S"
        ),
        _react2.default.createElement(
          "div",
          { key: 2, className: "week-name-div" },
          "T"
        ),
        _react2.default.createElement(
          "div",
          { key: 3, className: "week-name-div" },
          "Q"
        ),
        _react2.default.createElement(
          "div",
          { key: 4, className: "week-name-div" },
          "Q"
        ),
        _react2.default.createElement(
          "div",
          { key: 5, className: "week-name-div" },
          "S"
        ),
        _react2.default.createElement(
          "div",
          { key: 6, className: "week-name-div" },
          "S"
        )
      );
    }
  }]);

  return WeekHeader;
}(_react.Component);

exports.default = WeekHeader;