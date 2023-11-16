import React from "react";
import logo from "../assets/img/logo.png";
import Button from "./utils/Button";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  const loginPage = () => {
    let path = `auth`;
    navigate(path);
  };
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block"></span>
            <a className="navbar-brand d-none d-lg-inline-block" href="/">
              <img src={logo} alt="logo" width={150} />
            </a>

            {/* <a
          className="navbar-brand-two mx-auto d-lg-none d-inline-block"
          href="#"
        >
          <img src={logo} alt="logo" width={150} />
        </a> */}
            <div className="w-100 text-right">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#myNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div
            className="collapse navbar-collapse flex-grow-1 text-right"
            id="myNavbar"
          >
            <ul className="navbar-nav ms-auto flex-nowrap">
              <li className="nav-item">
                <a href="#" className="nav-link m-2 menu-item nav-active">
                  Course
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link m-2 menu-item">
                  Tentang
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link m-2 menu-item">
                  Corporate Training
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <Button
                  type="button"
                  text="Login"
                  isSmall={true}
                  onClick={loginPage}
                />

                {/* <button
                  type="button"
                  class="btn custom-btn is-small"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Launch demo modal
                </button> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
