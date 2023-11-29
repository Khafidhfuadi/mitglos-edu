import React, { useEffect } from "react";
import AdminDashboard from "./admin/AdminDashboard";
import UserDashboard from "./user/UserDashboard";

const Dashboard = ({ user, handleLogout }) => {
  useEffect(() => {
    document.title = "Dashboard";
  });

  return (
    <>
      {user && user?.role?.name === "user" ? (
        <UserDashboard user={user} handleLogout={handleLogout} />
      ) : (
        <AdminDashboard user={user} handleLogout={handleLogout} />
      )}
    </>
  );
};

export default Dashboard;
