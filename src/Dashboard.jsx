import React from "react";
import AdminDashboard from "./admin/AdminDashboard";
import UserDashboard from "./UserDashboard";

const Dashboard = ({ user, handleLogout }) => {
  return (
    <>
      {user && user?.role === 1 ? (
        <UserDashboard user={user} handleLogout={handleLogout} />
      ) : (
        <AdminDashboard user={user} handleLogout={handleLogout} />
      )}
    </>
  );
};

export default Dashboard;
