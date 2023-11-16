import React from "react";

const AdminDashboard = ({ user, handleLogout }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard, , {user?.nama_depan}!</p>
    </div>
  );
};

export default AdminDashboard;
