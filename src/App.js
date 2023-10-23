import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* home route */}
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
