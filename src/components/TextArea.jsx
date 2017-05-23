import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextArea = ({ name, label, value, placeholder, onChange, valid }) => {
  const classes = classnames({
    "form-control": true,
    "costum-textarea": true,
    "invalid-input": !valid,
  })

  return (
    <div className="form-group">
      <label htmlFor={name}>{ label }</label>
      <textarea
        className={ classes }
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
