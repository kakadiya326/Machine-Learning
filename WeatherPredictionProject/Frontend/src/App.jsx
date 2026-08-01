import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherForm from "./components/WeatherForm";
import ModelInsights from "./components/ModelInsights";
import About from "./components/About";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [isBackendConnected, setIsBackendConnected] = useState(true);

  return (
    <Router>
      <div className="app-container">
        <Navbar isBackendConnected={isBackendConnected} />

        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={<WeatherForm onBackendStatusChange={setIsBackendConnected} />} 
            />
            <Route path="/insights" element={<ModelInsights />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} AtmosphereAI Weather Humidity Prediction System • Machine Learning & React</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;