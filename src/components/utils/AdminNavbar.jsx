import React from "react";
import logo from "../../assets/img/logo.png";

function AdminNavbar(props) {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            Admin Dashboard | <img src={logo} width="80px" alt="logo" />
          </a>
          <button class="navbar-toggler" type="button" data-togle="collapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <ul class="navbar-nav ml-auto pt-2 pb-2">
            <li class="nav-item ml-4">
              <a class="btn text-light" onClick={props.handleLogout}>
                Log Out{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default AdminNavbar;
