"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _Calendar = require("./Calendar");

var _Calendar2 = _interopRequireDefault(_Calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

var CalendarMenu = function (_Component) {
  _inherits(CalendarMenu, _Component);

  function CalendarMenu(props) {
    _classCallCheck(this, CalendarMenu);

    var _this = _possibleConstructorReturn(this, (CalendarMenu.__proto__ || Object.getPrototypeOf(CalendarMenu)).call(this, props));

    _this.setOpen = function (open) {
      return _this.setState({ calendarOpen: open });
    };

    _this.onClick = function (event) {
      _this.setOpen(!_this.state.calendarOpen);
    };

    _this.state = {
      date: _this.props.date,
      calendarOpen: false
    };
    return _this;
  }

  _createClass(CalendarMenu, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.date !== this.props.date) {
        this.state.date = nextProps.date;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var classes = (0, _classnames2.default)({
        "calendar-menu-inner": true,
        "hidden": !this.state.calendarOpen
      });
      var dayInput = weekdays[this.state.date.day()] + ", " + this.state.date.locale("pt-BR").format("LL");
      return _react2.default.createElement(
        "div",
        { className: "calendar-menu" },
        _react2.default.createElement(
          "div",
          { className: "calendar-menu-inner" },
          _react2.default.createElement("input", {
            className: "form-control home-date-input",
            readOnly: true,
            value: dayInput,
            onClick: this.onClick })
        ),
        _react2.default.createElement(
          "div",
          { className: classes },
          _react2.default.createElement(_Calendar2.default, { preSelected: this.state.date, onSelect: this.props.onSelect })
        )
      );
    }
  }]);

  return CalendarMenu;
}(_react.Component);

exports.default = CalendarMenu;