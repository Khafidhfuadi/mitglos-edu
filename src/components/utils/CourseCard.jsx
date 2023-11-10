import React from "react";
import PropTypes from "prop-types";
import "./component.css";
// import thumbnail from "../../assets/img/course-thumbnail.png";
import calenderIcon from "../../assets/img/calender.svg";
import lightningIcon from "../../assets/img/lightning.svg";

const CourseCard = ({
  thumbnailImg,
  kategori,
  periode,
  pertemuan,
  tempat,
  judul,
  ringkasan,
  hargaAsli,
  discount,
  isPromo,
  onClick,
}) => {
  const hargaDiskon = hargaAsli - (hargaAsli * discount) / 100;
  const formatHarga = (harga) => {
    return harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  const isPromoStyle = isPromo ? { display: "block" } : { display: "none" };

  return (
    <div className="course-card" onClick={onClick}>
      <div className="img-container">
        <div
          style={isPromoStyle}
          className="discount-timer d-flex align-items-center"
        >
          <img src={lightningIcon} alt="" />
          <span>Diskon 64% 13:09:18</span>
        </div>
        <img className="img-thumb" src={thumbnailImg} alt="" />
        <div
          className="pill-container"
          style={{ position: "absolute", bottom: "10px", left: "12px" }}
        >
          <div className="pill">{kategori}</div>
          <div className="pill">
            <img src={calenderIcon} alt="" width={14} />
            {periode}
          </div>
        </div>
      </div>
      <div className="container-text">
        <p>
          {pertemuan} | {tempat}
        </p>
        <h3>{judul}</h3>
        <p className="ringkasan">{ringkasan}</p>
        <div className="discount-container">
          <span>Rp.{formatHarga(hargaAsli)}</span>
          <div className="discount">{discount}%</div>
        </div>
        <div className="price">Rp.{formatHarga(hargaDiskon)}</div>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  thumbnailImg: PropTypes.string,
  kategori: PropTypes.string,
  periode: PropTypes.string,
  pertemuan: PropTypes.string,
  tempat: PropTypes.string,
  judul: PropTypes.string,
  ringkasan: PropTypes.string,
  hargaAsli: PropTypes.number,
  discount: PropTypes.number,
  onClick: PropTypes.func,
};

export default CourseCard;
