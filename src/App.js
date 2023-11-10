import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";

import Navbar from "../src/components/Navbar"; // import the Navbar component
import Footer from "../src/components/Footer"; // import the Footer component
import DetailCourse from "./DetailCourse";

function App() {
  return (
    <Router>
      <Navbar /> {/* add the Navbar component */}
      <Routes>
        {/* home route */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/detail-course/" element={<DetailCourse />} />
      </Routes>
      <Footer /> {/* add the Footer component */}
    </Router>
  );
}

export default App;
