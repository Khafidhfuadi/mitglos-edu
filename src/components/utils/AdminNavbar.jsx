import React from "react";
import logo from "../../assets/img/logo.png";

import { Link } from "react-router-dom";

function AdminNavbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
        <div className="container">
          <Link className="navbar-brand" to="/dashboard">
            Admin Dashboard | <img src={logo} width="80px" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-togle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav ml-auto pt-2 pb-2">
            <li className="nav-item ml-4">
              <Link
                className="btn text-light"
                onClick={props.handleLogout}
                to="#"
              >
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default AdminNavbar;
