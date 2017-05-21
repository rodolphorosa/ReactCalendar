import React, { Component } from "react";
import PropTypes from "prop-types";

const TextArea = ({ name, label, value, placeholder, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{ label }</label>
      <textarea
        className="form-control costum-textarea"
        name={ name }
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange } />
    </div>
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextArea;
