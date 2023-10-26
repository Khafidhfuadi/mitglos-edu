import React from "react";
import PropTypes from "prop-types";
import "./component.css";

const TestiCard = ({ content, imagePath, name, position }) => {
  return (
    <div className="testi-card">
      <img src="" alt="" />
    </div>
  );
};

TestiCard.propTypes = {
  content: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default TestiCard;
