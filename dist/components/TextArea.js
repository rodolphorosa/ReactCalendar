"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = function (_Component) {
  _inherits(TextArea, _Component);

  function TextArea(props) {
    _classCallCheck(this, TextArea);

    var _this = _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, props));

    _this.state = {
      value: _this.props.value ? _this.props.value : "",
      valid: true
    };
    return _this;
  }

  _createClass(TextArea, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        this.setState({ value: nextProps.value });
      }

      if (nextProps.valid !== this.props.valid) {
        this.setState({ valid: nextProps.valid });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var classes = (0, _classnames2.default)({
        "form-control": true,
        "custom-textarea": true,
        "invalid-input": !this.state.valid
      });
      return _react2.default.createElement(
        "div",
        { className: "form-group" },
        _react2.default.createElement(
          "label",
          { htmlFor: this.props.name },
          this.props.label
        ),
        _react2.default.createElement("textarea", {
          className: classes,
          name: this.props.name,
          placeholder: this.props.placeholder,
          value: this.state.value,
          onChange: this.props.onChange })
      );
    }
  }]);

  return TextArea;
}(_react.Component);

TextArea.propTypes = {
  name: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string,
  value: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  onChange: _propTypes2.default.func.isRequired,
  valid: _propTypes2.default.bool
};
exports.default = TextArea;