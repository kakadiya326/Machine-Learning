import React from "react";
import { 
  CloudSun, 
  Cpu, 
  Layers, 
  Server, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  BookOpen, 
  Code,
  ShieldCheck
} from "lucide-react";

const About = () => {
  return (
    <div className="about-wrapper">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="brand-icon" style={{ margin: "0 auto 20px", width: "56px", height: "56px" }}>
          <CloudSun size={32} />
        </div>
        <h1>Weather Humidity <span className="title-gradient">Prediction System</span></h1>
        <p className="subtitle" style={{ fontSize: "1.1rem" }}>
          An end-to-end Machine Learning solution designed to predict afternoon (3 PM) relative humidity using early morning (9 AM) meteorological parameters.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="about-features-grid">
        <div className="about-card glass-card">
          <div className="about-card-icon">
            <Cpu size={24} />
          </div>
          <h3>Machine Learning Core</h3>
          <p>
            Powered by a trained Linear Regression model with Scikit-learn feature scaling (`StandardScaler`) achieving an R² accuracy of over 99% on historical weather data.
          </p>
        </div>

        <div className="about-card glass-card">
          <div className="about-card-icon" style={{ background: "rgba(192, 132, 252, 0.15)", color: "var(--primary-purple)" }}>
            <Server size={24} />
          </div>
          <h3>Flask Microservice</h3>
          <p>
            Lightweight Python Flask backend hosting REST endpoints for live prediction requests (`/predict`) and dataset range metadata (`/ranges`).
          </p>
        </div>

        <div className="about-card glass-card">
          <div className="about-card-icon" style={{ background: "rgba(52, 211, 153, 0.15)", color: "var(--accent-emerald)" }}>
            <Globe size={24} />
          </div>
          <h3>React 19 & Vite UI</h3>
          <p>
            Ultra-fast responsive frontend with glassmorphism UI, dual-input sliders, scenario presets, visual gauge visualization, and fallback resilience.
          </p>
        </div>
      </div>

      {/* End-to-End Pipeline Visualization */}
      <div className="pipeline-section glass-card">
        <h2 style={{ fontSize: "1.3rem", textAlign: "center", marginBottom: "8px" }}>
          System Architecture & Data Flow
        </h2>
        <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.9rem" }}>
          How 9 AM weather inputs travel from user interface to prediction output:
        </p>

        <div className="pipeline-flow">
          <div className="pipeline-step">
            <div style={{ color: "var(--primary-cyan)", marginBottom: "4px" }}>9 AM Weather Inputs</div>
            <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Pressure, Temp, Wind, Rain</span>
          </div>
          
          <ArrowRight className="pipeline-arrow" size={20} />

          <div className="pipeline-step">
            <div style={{ color: "var(--primary-purple)", marginBottom: "4px" }}>StandardScaler</div>
            <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Zero Mean & Unit Variance</span>
          </div>

          <ArrowRight className="pipeline-arrow" size={20} />

          <div className="pipeline-step">
            <div style={{ color: "var(--accent-emerald)", marginBottom: "4px" }}>Linear Regression</div>
            <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Predict 3 PM Humidity</span>
          </div>

          <ArrowRight className="pipeline-arrow" size={20} />

          <div className="pipeline-step">
            <div style={{ color: "var(--accent-amber)", marginBottom: "4px" }}>Interactive Gauge</div>
            <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>UI Comfort Classification</span>
          </div>
        </div>
      </div>

      {/* Usage Guide & Tech Stack */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
        <div className="glass-card" style={{ padding: "28px" }}>
          <h3 style={{ fontSize: "1.15rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <BookOpen size={20} color="var(--primary-cyan)" />
            <span>How to Use the Predictor</span>
          </h3>
          <ol style={{ paddingLeft: "20px", color: "var(--text-muted)", lineHeight: "1.8", fontSize: "0.93rem" }}>
            <li>Select a quick preset (e.g., <em>Sunny Morning</em> or <em>Rainy Morning</em>) or enter custom weather values.</li>
            <li>Use the sliders or numeric input fields to adjust parameters like Air Pressure, Temp, or Wind Speed.</li>
            <li>Click <strong>Predict 3 PM Humidity</strong> to execute model inference.</li>
            <li>View the interactive humidity ring gauge, humidity classification, and morning-to-afternoon trend shift.</li>
          </ol>
        </div>

        <div className="glass-card" style={{ padding: "28px" }}>
          <h3 style={{ fontSize: "1.15rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Code size={20} color="var(--primary-purple)" />
            <span>Technologies & Libraries</span>
          </h3>
          <div className="tech-stack-badges">
            <span className="tech-badge" style={{ borderColor: "rgba(56, 189, 248, 0.3)", color: "var(--primary-cyan)" }}>Python 3.10+</span>
            <span className="tech-badge" style={{ borderColor: "rgba(192, 132, 252, 0.3)", color: "var(--primary-purple)" }}>Scikit-learn</span>
            <span className="tech-badge" style={{ borderColor: "rgba(52, 211, 153, 0.3)", color: "var(--accent-emerald)" }}>Flask REST API</span>
            <span className="tech-badge" style={{ borderColor: "rgba(251, 191, 36, 0.3)", color: "var(--accent-amber)" }}>React 19</span>
            <span className="tech-badge">Vite Build Tool</span>
            <span className="tech-badge">Axios HTTP</span>
            <span className="tech-badge">Lucide Icons</span>
            <span className="tech-badge">Vanilla CSS Tokens</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;