import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CloudSun, Sliders, BarChart2, Info, Activity } from "lucide-react";

const Navbar = ({ isBackendConnected }) => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand-logo">
          <div className="brand-icon">
            <CloudSun size={22} />
          </div>
          <span>Atmosphere<span className="title-gradient">AI</span></span>
          <span className="brand-badge">ML 3PM Predictor</span>
        </Link>

        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            <Sliders size={18} />
            <span>Predictor</span>
          </Link>

          <Link 
            to="/insights" 
            className={`nav-link ${location.pathname === "/insights" ? "active" : ""}`}
          >
            <BarChart2 size={18} />
            <span>Model Analytics</span>
          </Link>

          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
          >
            <Info size={18} />
            <span>About</span>
          </Link>
        </div>

        <div className="status-indicator" title={isBackendConnected ? "Connected to Flask ML API" : "Backend waking up / Standby Mode"}>
          <span className={`status-dot ${isBackendConnected ? "online" : "fallback"}`}></span>
          <span>{isBackendConnected ? "API Connected" : "Local / Standby"}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;