import React, { useEffect, useState } from "react";
import axios from "axios";
import PredictionCard from "./PredictionCard";
import Loader from "./Loader";

const API_URL = "https://machine-learning-lshy.onrender.com";

const WeatherForm = () => {
    const [ranges, setRanges] = useState({});
    const [formData, setFormData] = useState({});
    const [prediction, setPrediction] = useState(null);
    const [formLoading , setFormLoading ] = useState(false);
    const [predictLoading , setPredictLoading ] = useState(false);

    useEffect(() => {
        setFormLoading(true);
        axios.get(`${API_URL}/ranges`)
            .then(res => {
                setRanges(res.data);
                setFormData(
                    Object.keys(res.data).reduce((acc, key) => {
                        acc[key] = "";
                        return acc;
                    }, {})
                );
            })
            .catch(err => console.error(err))
            .finally(() => {
                setFormLoading(false);
            })

    }, []);

    const handleChange = (e, feature) => {
        setFormData({
            ...formData,
            [feature]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPredictLoading(true);
        setPrediction(null);

        try {
            const response = await axios.post(`${API_URL}/predict`, formData);
            setPrediction(response.data.predicted_humidity_3pm);
        } catch (error) {
            alert("Prediction failed!");
        }

        setPredictLoading(false);
    };

    const getProgressValue = (feature) => {
        const value = parseFloat(formData[feature]) || 0;
        const min = ranges[feature]?.min || 0;
        const max = ranges[feature]?.max || 100;
        return ((value - min) / (max - min)) * 100;
    };

    return (
        <div className="form-container">
            {formLoading && <Loader text="Loading form..."/>}

            <div className="form-header">
                <h1>🌤️ Weather Prediction</h1>
                <p>Enter weather parameters to predict humidity at 3 PM</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-grid">
                    {Object.keys(ranges).map((feature) => (
                        <div key={feature} className="input-group">
                            <div className="label-container">
                                <label>{feature.replace(/_/g, " ")}</label>
                                <span className="value-display">
                                    {formData[feature] ? `${parseFloat(formData[feature]).toFixed(2)}` : "—"}
                                </span>
                            </div>
                            <input
                                type="range"
                                min={Math.round(ranges[feature].min)}
                                max={Math.round(ranges[feature].max)}
                                step="0.1"
                                value={formData[feature] || ranges[feature].min}
                                onChange={(e) => handleChange(e, feature)}
                                className="slider"
                            />
                            <input
                                type="number"
                                step="any"
                                min={Math.round(ranges[feature].min)}
                                max={Math.round(ranges[feature].max)}
                                value={formData[feature] || ""}
                                onChange={(e) => handleChange(e, feature)}
                                placeholder="Enter value"
                                className="number-input"
                            />
                            <small className="range-text">
                                {Math.round(ranges[feature].min)} – {Math.round(ranges[feature].max)}
                            </small>
                        </div>
                    ))}
                </div>

                <button type="submit" className="submit-btn" disabled={predictLoading}>
                    {predictLoading ? "Predicting..." : "🔮 Predict Humidity"}
                </button>
            </form>

            {predictLoading && <Loader text="Analyzing weather data..." />}
            {prediction !== null && <PredictionCard value={prediction} />}
        </div>
    );
};

export default WeatherForm;