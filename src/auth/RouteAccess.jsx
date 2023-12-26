import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NotFound from "../NotFound";
import AdminNavbar from "../components/utils/AdminNavbar";

export const withAuthUser = (Component) => {
  const AuthRoute = (props) => {
    if (props.user && props.user.role && props.user.role.name === "user") {
      return (
        <>
          <Navbar {...props} />
          <Component {...props} />
          <Footer />
        </>
      );
    } else {
      return <NotFound />;
    }
  };

  return AuthRoute;
};

export const withAuthAdmin = (Component) => {
  const AuthRoute = (props) => {
    if (props.user.role.name === "admin") {
      return (
        <>
          <AdminNavbar {...props} />
          <Component {...props} />
        </>
      );
    } else {
      return <NotFound />;
    }
  };

  return AuthRoute;
};
