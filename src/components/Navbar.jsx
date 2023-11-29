import React from "react";
import logo from "../assets/img/logo.png";
import Button from "./utils/Button";
import { Link, useNavigate } from "react-router-dom";

function Navbar(props) {
  let navigate = useNavigate();
  const loginPage = () => {
    let path = `/auth`;
    navigate(path);
  };
  const dashboardPage = () => {
    let path = `/dashboard`;
    navigate(path);
  };
  // get user sessionStorage
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block"></span>
            <Link className="navbar-brand d-none d-lg-inline-block" to="/">
              <img src={logo} alt="logo" width={150} />
            </Link>

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
              {user ? (
                <>
                  <li className="nav-item d-flex align-items-center">
                    <Button
                      type="button"
                      text={"Dashboard"}
                      isSmall={true}
                      onClick={dashboardPage}
                    />
                  </li>
                  <li class="nav-item dropdown d-flex align-items-center ms-2">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fas fa-user"></i>
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-start"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          <i class="fas fa-sliders-h fa-fw"></i> Account
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <i class="fas fa-cog fa-fw"></i> Settings
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          class="dropdown-item"
                          onClick={props.handleLogout}
                        >
                          <i class="fas fa-sign-out-alt fa-fw"></i> Log Out
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <li className="nav-item d-flex align-items-center">
                  <Button
                    type="button"
                    text={props.user ? "Logout" : "Login"}
                    isSmall={true}
                    onClick={props.user ? props.handleLogout : loginPage}
                  />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
