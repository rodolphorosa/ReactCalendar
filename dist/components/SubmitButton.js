"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubmitButton = function SubmitButton(_ref) {
  var title = _ref.title,
      onSubmit = _ref.onSubmit,
      history = _ref.history;
  return _react2.default.createElement(
    "button",
    {
      type: "button",
      onClick: onSubmit(history) },
    title
  );
};

exports.default = SubmitButton;