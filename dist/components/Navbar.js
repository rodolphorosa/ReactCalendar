"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.requestToday = function () {
      return _this.props.requestToday();
    };

    _this.requestDate = function () {
      return _this.props.requestDate(_this.state.date);
    };

    _this.requestWeek = function () {
      return _this.props.requestWeek(_this.state.date);
    };

    _this.requestMonth = function () {
      return _this.props.requestMonth(_this.state.date);
    };

    _this.state = {
      date: props.date
    };
    return _this;
  }

  _createClass(Navbar, [{
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
        "nav",
        { className: "react-navbar" },
        _react2.default.createElement(
          "ul",
          { className: "react-navbar-ul" },
          _react2.default.createElement(
            "li",
            { className: "react-navbar-li", onClick: this.requestToday },
            "Hoje"
          ),
          _react2.default.createElement(
            "li",
            { className: "react-navbar-li", onClick: this.requestDate },
            "Dia"
          ),
          _react2.default.createElement(
            "li",
            { className: "react-navbar-li", onClick: this.requestWeek },
            "Semana"
          ),
          _react2.default.createElement(
            "li",
            { className: "react-navbar-li", onClick: this.requestMonth },
            "M\xEAs"
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react.Component);

;

exports.default = Navbar;