import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";

import DetailCourse from "./DetailCourse";
import AuthPage from "./auth/AuthPage";
import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import PrivateRoute from "./auth/PrivateRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddService from "./admin/AddService";
import AddMentor from "./admin/AddMentor";
import DetailService from "./admin/DetailService";
import AddDetailService from "./admin/AddDetailService";

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
    if (user.role.name === "admin") {
      //generate random greetings and save it to session storage
      const greetings = [
        `Hallo, Gimana kabare Minglos ${user.name}? <i class="fa-solid fa-handshake"></i>`,
        `Jangan Lupa Makan Minglos ${user.name}! <i class="fa-solid fa-utensils"></i>`,
        `Jaga Kesehatan Selalu Minglos ${user.name}! <i class="fa-solid fa-notes-medical"></i>`,
        `Suda Makan Belum Minglos ${user.name}? <i class="fa-solid fa-bowl-food"></i>`,
        `Jangan Lupa Minum Air Putih Minglos ${user.name}! <i class="fa-solid fa-glass-water-droplet"></i>`,
        `Jangan Lupa Istirahat Minglos ${user.name}! <i class="fa-solid fa-bed"></i>`,
        `Jangan Lupa Berolahraga Minglos ${user.name}! <i class="fa-solid fa-dumbbell"></i>`,
        `Jangan Lupa Mandi Minglos ${user.name}! <i class="fa-solid fa-shower"></i>`,
        `Selalulah Bersyukur Minglos ${user.name}! <i class="fa-solid fa-praying-hands"></i>`,
        `Jangan Lupa Staycation Minglos ${user.name}! <i class="fa-solid fa-suitcase"></i>`,
        `Minglos ${user.name} Jangan Lupa Bahagia! <i class="fa-solid fa-smile"></i>`,
        `Selalu Semangat Minglos ${user.name}! <i class="fa-solid fa-rocket"></i>`,
        `Waktunya Ngopi Minglos ${user.name}! <i class="fa-solid fa-mug-hot"></i>`,
        `Eh Minglos ${user.name} Jangan Lupa Makan! <i class="fa-solid fa-utensils"></i>`,
        `Vitamin C itu Penting Minglos ${user.name}! <i class="fa-solid fa-capsules"></i>`,
        `Jangan Kurang Istirahat Minglos ${user.name}! <i class="fa-solid fa-bed"></i>`,
        `Tidur Jangan Kurang Minglos ${user.name}! <i class="fa-solid fa-bed"></i>`,
        `Xixixi Minglos ${user.name}! <i class="fa-solid fa-laugh-beam"></i>`,
        `Harus Work Life Balance Minglos ${user.name}! <i class="fa-solid fa-balance-scale"></i>`,
        `Keep Spirit Minglos ${user.name}! <i class="fa-solid fa-ghost"></i>`,
        `Relax Minglos ${user.name}! <i class="fa-solid fa-couch"></i>`,
        `Always Be Happy Minglos ${user.name}! <i class="fa-solid fa-smile"></i>`,
        `Dear Minglos ${user.name}, Have a Nice Day! <i class="fa-solid fa-sun"></i>`,
        `Welcome Back Minglos ${user.name}! <i class="fa-solid fa-handshake"></i>`,
        `Ohayo Minglos ${user.name}! <i class="fa-solid fa-sun"></i>`,
        `Konnichiwa Minglos ${user.name}! <i class="fa-solid fa-sun"></i>`,
      ];
      const randomGreeting =
        greetings[Math.floor(Math.random() * greetings.length)];
      sessionStorage.setItem("greeting", randomGreeting);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("greeting");
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
          path="/course/:id"
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
          <Route
            exact
            path="/dashboard"
            element={<Dashboard user={user} handleLogout={handleLogout} />}
          />
          <Route
            exact
            path="/add-service"
            element={<AddService user={user} handleLogout={handleLogout} />}
          />
          <Route
            exact
            path="/add-detail-service/:id"
            element={
              <AddDetailService user={user} handleLogout={handleLogout} />
            }
          />
          <Route
            exact
            path="/service/:id"
            element={<DetailService user={user} handleLogout={handleLogout} />}
          />

          <Route
            exact
            path="/add-mentor"
            element={<AddMentor user={user} handleLogout={handleLogout} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
