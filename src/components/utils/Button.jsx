import React from "react";
import PropTypes from "prop-types";
import "./component.css";

const Button = ({ text, onClick, disabled, isOutline }) => {
  return (
    <div
      className={`custom-btn ${isOutline ? "outline" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isOutline: PropTypes.bool,
};

export default Button;
