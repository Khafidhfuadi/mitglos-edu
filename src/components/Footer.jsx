import React from "react";
import logo from "../assets/img/logo.png";
import ig from "../assets/img/ig.svg";
import linkedin from "../assets/img/linkedin-footer.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col">
            <img src={logo} alt="" srcset="" width={150} />
          </div>
          <div className="col d-flex gap-5 justify-content-center">
            <a href="#" className="nav-footer">
              Course
            </a>
            <a href="#" className="nav-footer">
              Tentang
            </a>
            <a href="#" className="nav-footer">
              Corporate Training
            </a>
          </div>
          <div className="col justify-content-end d-flex gap-3">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={ig} alt="" srcset="" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="" srcset="" />
            </a>
          </div>
        </div>
        <div className="line"></div>
        <div className="nav-footer">© 2023 MITGLOS EDU. All Right Reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
