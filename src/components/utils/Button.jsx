import React from "react";
import PropTypes from "prop-types";
import "./component.css";

const Button = ({ text, onClick, disabled, isOutline, isSmall }) => {
  return (
    <div
      className={`custom-btn ${isOutline ? "outline" : ""} ${
        isSmall ? "is-small" : ""
      }`}
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
  isSmall: PropTypes.bool,
};

export default Button;
