import React from "react";
import PropTypes from "prop-types";
import "./component.css";
import quoteIcon from "../../assets/img/quote_icon.svg";
import profilePict from "../../assets/img/profile-pict.png";

const TestiCard = ({ content, imagePath, name, position }) => {
  return (
    <div className="testi-card">
      <img className="quote-icon" src={quoteIcon} alt="" />
      <div className="content">
        MITGLOS EDU sangat{" "}
        <strong>membantu karir saya menjadi lebih baik</strong>. Terimakasih
        MITGLOS EDU, Semoga makin sukses terus!!! Aamiin!{" "}
      </div>
      <div className="profile-testi">
        <img src={profilePict} alt="" />
        <div className="profile-testi-desc">
          <div className="name">Akbar Jajaj</div>
          <div className="position">Tukang Somay</div>
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
