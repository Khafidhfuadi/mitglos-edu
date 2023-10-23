import React from "react";
import PropTypes from "prop-types";
import "./component.css";
import verifiedLogo from "../../assets/img/verified.svg";

const BenefitCard = ({ head, desc }) => {
  return (
    <div className="benefit-card">
      <div className="header">{head}</div>
      <div className="description">{desc}</div>

      <div className="d-flex justify-content-end">
        <img src={verifiedLogo} alt="" />
      </div>
    </div>
  );
};

BenefitCard.propTypes = {
  head: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default BenefitCard;
