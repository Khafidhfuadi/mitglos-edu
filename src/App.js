import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";

import Navbar from "../src/components/Navbar"; // import the Navbar component
import Footer from "../src/components/Footer"; // import the Footer component
import DetailCourse from "./DetailCourse";
import AuthPage from "./auth/AuthPage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    return savedUser || null;
  });

  const handleSetUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogin = (data) => {
    const { token, user } = data;
    setUser(user);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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
              <Navbar />
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
              <Navbar />
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
      </Routes>
    </Router>
  );
}

export default App;
