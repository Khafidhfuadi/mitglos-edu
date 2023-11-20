import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ path, element: Element, user }) => {
  // console.log(user);
  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
