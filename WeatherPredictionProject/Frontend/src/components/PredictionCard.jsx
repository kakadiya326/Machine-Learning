import React from "react";
import { Sun, Smile, Droplets, CloudRain, Sparkles, TrendingUp, TrendingDown, ArrowRight } from "lucide-react";

const getHumidityStatus = (val) => {
  if (val < 30) {
    return {
      label: "Dry Atmosphere",
      class: "status-dry",
      color: "#fbbf24",
      icon: <Sun size={18} />,
      advice: "Low humidity. Skin may feel dry; stay hydrated throughout the day."
    };
  } else if (val <= 55) {
    return {
      label: "Optimal & Comfortable",
      class: "status-ideal",
      color: "#34d399",
      icon: <Smile size={18} />,
      advice: "Ideal outdoor conditions with crisp, comfortable air quality."
    };
  } else if (val <= 75) {
    return {
      label: "Humid Weather",
      class: "status-humid",
      color: "#38bdf8",
      icon: <Droplets size={18} />,
      advice: "Noticeable moisture in the air. Warm temperatures will feel warmer."
    };
  } else {
    return {
      label: "Extremely Muggy",
      class: "status-muggy",
      color: "#fb7185",
      icon: <CloudRain size={18} />,
      advice: "High atmospheric moisture. Increased chance of precipitation."
    };
  }
};

const PredictionCard = ({ value, morningHumidity, isFallbackUsed }) => {
  const status = getHumidityStatus(value);
  
  // Calculate SVG gauge stroke dashoffset (radius = 70, circ = 2 * pi * 70 = 439.82)
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const percent = Math.min(Math.max(value, 0), 100) / 100;
  const strokeDashoffset = circumference * (1 - percent);

  const delta = morningHumidity ? value - parseFloat(morningHumidity) : 0;

  return (
    <div className="prediction-card glass-card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <Sparkles size={16} color="var(--primary-cyan)" />
        <span>3 PM Predicted Relative Humidity</span>
      </div>

      <div className="gauge-wrapper">
        <svg className="gauge-svg" viewBox="0 0 160 160">
          <circle 
            className="gauge-bg" 
            cx="80" 
            cy="80" 
            r={radius} 
          />
          <circle 
            className="gauge-fill" 
            cx="80" 
            cy="80" 
            r={radius}
            style={{
              stroke: status.color,
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset
            }} 
          />
        </svg>

        <div className="gauge-center-text">
          <span className="gauge-value" style={{ color: status.color }}>
            {value.toFixed(1)}
          </span>
          <span className="gauge-unit">% RH</span>
        </div>
      </div>

      <div className={`humidity-status-tag ${status.class}`}>
        {status.icon}
        <span>{status.label}</span>
      </div>

      {isFallbackUsed && (
        <div style={{ fontSize: '0.75rem', color: 'var(--accent-amber)', marginTop: '8px' }}>
          ⚡ Fast Local Estimate (Backend waking up)
        </div>
      )}

      <div className="prediction-details">
        <div className="detail-row">
          <span className="detail-label">9 AM Baseline Humidity</span>
          <span className="detail-val">{morningHumidity ? `${parseFloat(morningHumidity).toFixed(1)}%` : "N/A"}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Afternoon Shift (9AM → 3PM)</span>
          <span className="detail-val" style={{ color: delta >= 0 ? "var(--primary-cyan)" : "var(--accent-amber)", display: 'flex', alignItems: 'center', gap: '4px' }}>
            {delta >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            {delta >= 0 ? `+${delta.toFixed(1)}%` : `${delta.toFixed(1)}%`}
          </span>
        </div>

        <div style={{ margin: '14px 0 0', padding: '12px', background: 'rgba(15, 23, 42, 0.6)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
          <strong>Forecast Note:</strong> {status.advice}
        </div>
      </div>
    </div>
  );
};

export default PredictionCard;