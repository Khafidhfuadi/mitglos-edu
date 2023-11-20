import React from "react";
import { withAuthUser } from "../auth/RouteAccess";

const UserDashboard = ({ user, handleLogout }) => {
  return (
    <section>
      <div className="container">
        <h1>User Dashboard</h1>
        <p>
          Welcome to the user dashboard, <b>{user?.name}</b>!
        </p>
      </div>
    </section>
  );
};

export default withAuthUser(UserDashboard);
