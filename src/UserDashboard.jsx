import React from "react";

const UserDashboard = ({ user, handleLogout }) => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <p>Welcome to the user dashboard, {user?.nama_depan}!</p>
    </div>
  );
};

export default UserDashboard;
