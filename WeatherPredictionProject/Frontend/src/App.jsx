import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherForm from "./components/WeatherForm";
import About from "./components/About";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WeatherForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;