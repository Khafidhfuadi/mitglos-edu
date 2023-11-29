import React from "react";
import { withAuthUser } from "../auth/RouteAccess";

const UserDashboard = ({ user, handleLogout }) => {
  return (
    <section className="container">
      <div className="card">
        <div className="card-body">
          <h1>Dashboard User</h1>
          <p>
            Gimana harimu, <b>{user?.name}</b>?
          </p>
        </div>
      </div>
    </section>
  );
};

export default withAuthUser(UserDashboard);
