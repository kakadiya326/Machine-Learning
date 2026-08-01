import React from "react";
import { FEATURE_IMPORTANCE } from "../constants/weatherData";
import { BarChart2, CheckCircle2, Cpu, Database, Award, Info, Zap } from "lucide-react";

const ModelInsights = () => {
  return (
    <div className="insights-container">
      <div className="page-header">
        <h1>Model <span className="title-gradient">Analytics & Insights</span></h1>
        <p className="subtitle">
          Detailed metrics, feature importance, and performance evaluation of the Linear Regression weather prediction model.
        </p>
      </div>

      {/* High Level Key Stats */}
      <div className="analytics-grid">
        <div className="stat-card glass-card">
          <div className="stat-icon-wrapper" style={{ background: "rgba(56, 189, 248, 0.15)", color: "var(--primary-cyan)" }}>
            <Award size={26} />
          </div>
          <div>
            <div className="stat-val" style={{ color: "var(--primary-cyan)" }}>0.992</div>
            <div className="stat-label">Model Accuracy (R² Score)</div>
          </div>
        </div>

        <div className="stat-card glass-card">
          <div className="stat-icon-wrapper" style={{ background: "rgba(192, 132, 252, 0.15)", color: "var(--primary-purple)" }}>
            <Database size={26} />
          </div>
          <div>
            <div className="stat-val" style={{ color: "var(--primary-purple)" }}>1,095</div>
            <div className="stat-label">Historical Weather Observations</div>
          </div>
        </div>

        <div className="stat-card glass-card">
          <div className="stat-icon-wrapper" style={{ background: "rgba(52, 211, 153, 0.15)", color: "var(--accent-emerald)" }}>
            <Cpu size={26} />
          </div>
          <div>
            <div className="stat-val" style={{ color: "var(--accent-emerald)" }}>9</div>
            <div className="stat-label">Input Predictor Features</div>
          </div>
        </div>
      </div>

      {/* Feature Importance & Model Mechanics */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", marginTop: "32px" }}>
        {/* Left Card: Feature Importance */}
        <div className="glass-card" style={{ padding: "28px" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
            <BarChart2 size={20} color="var(--primary-cyan)" />
            <span>Feature Correlation & Influence</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "20px" }}>
            Relative weight of 9 AM weather conditions when predicting 3 PM humidity:
          </p>

          <div className="feature-importance-list">
            {FEATURE_IMPORTANCE.map((item, idx) => (
              <div key={idx} className="importance-item">
                <div className="importance-info">
                  <span>{item.name}</span>
                  <span style={{ color: item.impact === "positive" ? "var(--primary-cyan)" : "var(--accent-rose)" }}>
                    {item.impact === "positive" ? `+${(item.weight * 100).toFixed(0)}%` : `${(item.weight * 100).toFixed(0)}%`}
                  </span>
                </div>
                <div className="importance-bar-bg">
                  <div 
                    className="importance-bar-fill"
                    style={{ 
                      width: `${Math.abs(item.weight) * 100}%`,
                      background: item.impact === "positive" ? "var(--grad-primary)" : "var(--grad-sunset)"
                    }}
                  />
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-dim)" }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card: Model Architecture */}
        <div className="glass-card" style={{ padding: "28px" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
            <Zap size={20} color="var(--accent-amber)" />
            <span>Pipeline Architecture</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ padding: "16px", background: "rgba(15, 23, 42, 0.6)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
              <h4 style={{ color: "var(--primary-cyan)", marginBottom: "4px" }}>1. Data Preprocessing & Scaling</h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                Raw feature inputs are normalized using <code>StandardScaler</code> so each feature contributes proportionally regardless of numeric scale (e.g. pressure ~920 vs rain duration ~10,000).
              </p>
            </div>

            <div style={{ padding: "16px", background: "rgba(15, 23, 42, 0.6)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
              <h4 style={{ color: "var(--primary-purple)", marginBottom: "4px" }}>2. Linear Regression Engine</h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                Scikit-learn Linear Regression algorithm computes optimal coefficients via ordinary least squares, providing fast, deterministic, and interpretable predictions.
              </p>
            </div>

            <div style={{ padding: "16px", background: "rgba(15, 23, 42, 0.6)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
              <h4 style={{ color: "var(--accent-emerald)", marginBottom: "4px" }}>3. Rest API & Production Hosting</h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                Model binary (<code>humidity_model.pkl</code>) and scaler (<code>scaler.pkl</code>) are deployed via Flask REST API CORS endpoints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelInsights;
