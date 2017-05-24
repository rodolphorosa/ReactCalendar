"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouterDom = require("react-router-dom");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Home = require("./Home");

var _Home2 = _interopRequireDefault(_Home);

var _Event = require("./Event");

var _Event2 = _interopRequireDefault(_Event);

var _AddEvent = require("./AddEvent");

var _AddEvent2 = _interopRequireDefault(_AddEvent);

var _EditEvent = require("./EditEvent");

var _EditEvent2 = _interopRequireDefault(_EditEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    "header",
    { className: "header" },
    _react2.default.createElement(
      "div",
      { className: "clock-wrapper" },
      _react2.default.createElement(
        "div",
        { className: "clock" },
        _react2.default.createElement("div", { className: "hour-hand" }),
        _react2.default.createElement("div", { className: "minute-hand" }),
        _react2.default.createElement("div", { className: "second-hand" }),
        _react2.default.createElement("div", { className: "middle" })
      )
    ),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: "/" },
        "React Calendar"
      )
    )
  );
};

var Footer = function Footer() {
  return _react2.default.createElement(
    "footer",
    { className: "footer" },
    "React Calendar is an example of ",
    _react2.default.createElement(
      "span",
      { className: "mern-stack" },
      "MERN Stack"
    ),
    " application. Developed by Rodolpho Rosa. Access ",
    _react2.default.createElement(
      "a",
      { className: "github", href: "https://github.com/rodolphorosa" },
      "Github"
    )
  );
};

var PageNotFound = function PageNotFound() {
  return _react2.default.createElement(
    "div",
    { className: "page-not-found" },
    _react2.default.createElement(
      "h1",
      null,
      "404"
    ),
    _react2.default.createElement(
      "h3",
      null,
      "Page not found!"
    ),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: "/" },
      "\xAB P\xE1gina principal."
    )
  );
};

var App = function App() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(Header, null),
    _react2.default.createElement(
      "div",
      { className: "main-container" },
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _Home2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/add", component: _AddEvent2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/events/:id", component: _Event2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/events/edit/:id", component: _EditEvent2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { component: PageNotFound })
      )
    ),
    _react2.default.createElement(Footer, null)
  );
};

exports.default = App;