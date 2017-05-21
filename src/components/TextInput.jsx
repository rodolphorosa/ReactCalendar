import React, { Component } from "react";
import PropTypes from "prop-types";

const TextInput = ({ name, label, value, placeholder, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{ label }</label>
      <input
        className="form-control costum-textarea"
        type="text"
        size={ 30 }
        name={ name }
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange } />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
