import React from "react";
import PropTypes from "prop-types";
import "./component.css";
import quoteIcon from "../../assets/img/quote_icon.svg";
// import profilePict from "../../assets/img/profile-pict.png";

const TestiCard = ({ content, imagePath, name, position }) => {
  console.log("imagePath", imagePath);
  return (
    <div className="testi-card">
      <img className="quote-icon" src={quoteIcon} alt="" />
      <div className="content">{content}</div>
      <div className="profile-testi">
        <img
          src={require(`../../assets/img/testi-profil/` + imagePath)}
          alt=""
          className="profile-pict rounded-circle"
        />
        <div className="profile-testi-desc">
          <div className="name">{name}</div>
          <div className="position">{position}</div>
        </div>
      </div>
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
