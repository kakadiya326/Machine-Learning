import React, { useEffect, useState } from "react";
import axios from "axios";
import { FEATURE_METADATA, PRESET_SCENARIOS } from "../constants/weatherData";
import { estimateHumidityLocal } from "../utils/localPredictor";
import PredictionCard from "./PredictionCard";
import Loader from "./Loader";
import { 
  Sliders, 
  Sparkles, 
  Thermometer, 
  Wind, 
  CloudRain, 
  RotateCcw, 
  Shuffle, 
  HelpCircle,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

const API_URL = "https://machine-learning-lshy.onrender.com";

const WeatherForm = ({ onBackendStatusChange }) => {
  const [ranges, setRanges] = useState(
    Object.keys(FEATURE_METADATA).reduce((acc, key) => {
      acc[key] = { min: FEATURE_METADATA[key].min, max: FEATURE_METADATA[key].max };
      return acc;
    }, {})
  );

  const [formData, setFormData] = useState(
    Object.keys(FEATURE_METADATA).reduce((acc, key) => {
      acc[key] = FEATURE_METADATA[key].defaultVal;
      return acc;
    }, {})
  );

  const [prediction, setPrediction] = useState(null);
  const [activePreset, setActivePreset] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [predictLoading, setPredictLoading] = useState(false);
  const [isFallbackUsed, setIsFallbackUsed] = useState(false);

  useEffect(() => {
    setFormLoading(true);
    axios.get(`${API_URL}/ranges`, { timeout: 8000 })
      .then(res => {
        if (res.data && Object.keys(res.data).length > 0) {
          setRanges(res.data);
          onBackendStatusChange && onBackendStatusChange(true);
        }
      })
      .catch(err => {
        console.warn("Backend API timeout/error, using default metadata ranges:", err);
        onBackendStatusChange && onBackendStatusChange(false);
      })
      .finally(() => {
        setFormLoading(false);
      });
  }, []);

  const handleChange = (feature, value) => {
    setActivePreset(null);
    setFormData(prev => ({
      ...prev,
      [feature]: value
    }));
  };

  const handleApplyPreset = (preset) => {
    setActivePreset(preset.id);
    setFormData(preset.values);
  };

  const handleReset = () => {
    setActivePreset(null);
    setFormData(
      Object.keys(FEATURE_METADATA).reduce((acc, key) => {
        acc[key] = FEATURE_METADATA[key].defaultVal;
        return acc;
      }, {})
    );
    setPrediction(null);
  };

  const handleRandomize = () => {
    setActivePreset(null);
    const randomVals = {};
    Object.keys(FEATURE_METADATA).forEach(key => {
      const min = ranges[key]?.min ?? FEATURE_METADATA[key].min;
      const max = ranges[key]?.max ?? FEATURE_METADATA[key].max;
      const rand = Math.random() * (max - min) + min;
      randomVals[key] = Number(rand.toFixed(2));
    });
    setFormData(randomVals);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPredictLoading(true);
    setPrediction(null);
    setIsFallbackUsed(false);

    const payload = {};
    Object.keys(formData).forEach(k => {
      payload[k] = parseFloat(formData[k]) || FEATURE_METADATA[k]?.defaultVal || 0;
    });

    try {
      // Axios request with 10s timeout
      const response = await axios.post(`${API_URL}/predict`, payload, { timeout: 10000 });
      if (response.data && response.data.predicted_humidity_3pm !== undefined) {
        setPrediction(response.data.predicted_humidity_3pm);
        onBackendStatusChange && onBackendStatusChange(true);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.warn("API unavailable or timing out, utilizing client estimation model fallback:", error);
      const fallbackVal = estimateHumidityLocal(payload);
      setPrediction(fallbackVal);
      setIsFallbackUsed(true);
      onBackendStatusChange && onBackendStatusChange(false);
    } finally {
      setPredictLoading(false);
    }
  };

  const categories = [
    {
      id: "atmosphere",
      title: "Atmosphere & Temperature",
      icon: <Thermometer size={18} />,
      iconClass: "atmosphere",
      features: ["air_pressure_9am", "air_temp_9am", "relative_humidity_9am"]
    },
    {
      id: "wind",
      title: "Wind Dynamics (9 AM)",
      icon: <Wind size={18} />,
      iconClass: "wind",
      features: ["avg_wind_direction_9am", "avg_wind_speed_9am", "max_wind_direction_9am", "max_wind_speed_9am"]
    },
    {
      id: "precipitation",
      title: "Rain & Moisture",
      icon: <CloudRain size={18} />,
      iconClass: "precipitation",
      features: ["rain_accumulation_9am", "rain_duration_9am"]
    }
  ];

  return (
    <div className="weather-predictor-wrapper">
      {/* Header */}
      <div className="page-header">
        <h1>Atmospheric <span className="title-gradient">Humidity Predictor</span></h1>
        <p className="subtitle">
          Input 9 AM meteorological variables to calculate 3 PM relative humidity using Machine Learning.
        </p>
      </div>

      {/* Preset Weather Scenarios */}
      <div className="presets-section glass-card">
        <div className="presets-title">
          <Sparkles size={16} color="var(--primary-cyan)" />
          <span>Quick Scenario Presets</span>
        </div>
        <div className="preset-buttons">
          {PRESET_SCENARIOS.map(preset => (
            <button
              key={preset.id}
              type="button"
              className={`preset-btn ${activePreset === preset.id ? "active" : ""}`}
              onClick={() => handleApplyPreset(preset)}
            >
              {preset.name}
            </button>
          ))}
          <button
            type="button"
            className="preset-btn"
            onClick={handleRandomize}
            title="Randomize realistic weather values"
          >
            <Shuffle size={14} />
            <span>Randomize</span>
          </button>
          <button
            type="button"
            className="preset-btn btn-secondary"
            onClick={handleReset}
            title="Reset to initial default values"
          >
            <RotateCcw size={14} />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Form Inputs & Output Card */}
      <form onSubmit={handleSubmit} className="predictor-grid">
        {/* Left Column: Form Categories */}
        <div className="form-column">
          {categories.map(cat => (
            <div key={cat.id} className="category-group glass-card" style={{ padding: '20px', marginBottom: '20px' }}>
              <div className="category-header">
                <div className={`category-icon ${cat.iconClass}`}>
                  {cat.icon}
                </div>
                <h3 className="category-title">{cat.title}</h3>
              </div>

              <div className="input-grid">
                {cat.features.map(feature => {
                  const meta = FEATURE_METADATA[feature] || {};
                  const min = ranges[feature]?.min ?? meta.min ?? 0;
                  const max = ranges[feature]?.max ?? meta.max ?? 100;
                  const val = formData[feature] ?? meta.defaultVal ?? 0;

                  return (
                    <div key={feature} className="input-card">
                      <div className="input-header">
                        <span className="input-label">{meta.label || feature.replace(/_/g, " ")}</span>
                        <span className="input-unit">{meta.unit}</span>
                      </div>

                      <div className="slider-container">
                        <input
                          type="range"
                          min={min}
                          max={max}
                          step={feature === "rain_duration_9am" ? "10" : "0.1"}
                          value={val}
                          onChange={e => handleChange(feature, parseFloat(e.target.value))}
                        />
                      </div>

                      <div className="number-input-row">
                        <input
                          type="number"
                          step="any"
                          min={min}
                          max={max}
                          value={val}
                          onChange={e => handleChange(feature, e.target.value === "" ? "" : parseFloat(e.target.value))}
                        />
                        <span className="range-bounds">
                          {Math.round(min)} – {Math.round(max)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="submit-container">
            <button
              type="submit"
              className="predict-submit-btn"
              disabled={predictLoading}
            >
              <Sparkles size={20} />
              <span>{predictLoading ? "Calculating Forecast..." : "Predict 3 PM Humidity"}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Prediction Output Side Panel */}
        <div className="prediction-panel">
          {predictLoading ? (
            <Loader text="Processing atmospheric parameters..." />
          ) : prediction !== null ? (
            <PredictionCard
              value={prediction}
              morningHumidity={formData.relative_humidity_9am}
              isFallbackUsed={isFallbackUsed}
            />
          ) : (
            <div className="prediction-card glass-card empty-prediction-state">
              <div className="empty-icon">
                <Sliders size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Ready to Forecast</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Adjust weather sliders or pick a quick scenario preset above, then click <strong>Predict 3 PM Humidity</strong>.
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default WeatherForm;