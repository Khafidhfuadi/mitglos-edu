import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";

import DetailCourse from "./DetailCourse";
import AuthPage from "./auth/AuthPage";
import { useState } from "react";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import PrivateRoute from "./auth/PrivateRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddService from "./admin/addService";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = JSON.parse(sessionStorage.getItem("user"));
    return savedUser || null;
  });

  // const handleSetUser = (userData) => {
  //   setUser(userData);
  //   sessionStorage.setItem("user", JSON.stringify(userData));
  // };

  const handleLogin = (data) => {
    const { token, user } = data;
    setUser(user);
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setUser(null);
  };
  return (
    <Router>
      <Routes>
        {/* home route */}
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar user={user} handleLogout={handleLogout} />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/detail-course/"
          element={
            <>
              <Navbar user={user} handleLogout={handleLogout} />
              <DetailCourse />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/auth"
          element={<AuthPage handleLogin={handleLogin} />}
        />
        <Route exact path="/" element={<PrivateRoute user={user} />}>
          <Route exact path="/dashboard" element={<Dashboard user={user} />} />
          <Route
            exact
            path="/add-service"
            element={<AddService user={user} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
