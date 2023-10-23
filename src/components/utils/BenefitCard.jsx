import React from "react";
import PropTypes from "prop-types";
import "./component.css";
import verifiedLogo from "../../assets/img/verified.svg";

const BenefitCard = ({ heading, desc }) => {
  return (
    <div className="benefit-card">
      <div className="header">{heading}</div>
      <div className="desc">{desc}</div>

      <div className="d-flex justify-content-end">
        <img src={verifiedLogo} alt="" />
      </div>
    </div>
  );
};

BenefitCard.propTypes = {
  heading: PropTypes.string.isRequired,
  desc: PropTypes.func.isRequired,
};

export default BenefitCard;
