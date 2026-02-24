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
        predictLoading(true);
        setPrediction(null);

        try {
            const response = await axios.post(`${API_URL}/predict`, formData);
            setPrediction(response.data.predicted_humidity_3pm);
        } catch (error) {
            alert("Prediction failed!");
        }

        predictLoading(false);
    };

    return (
        <div className="form-container">
            {formLoading && <Loader text="Loading form..."/>}
            <form onSubmit={handleSubmit}>
                {Object.keys(ranges).map((feature) => (
                    <div key={feature} className="input-group">
                        <label>{feature}</label>
                        <input
                            type="number"
                            step="any"
                            min={Math.round(ranges[feature].min)}
                            max={Math.round(ranges[feature].max)}
                            value={formData[feature] || ""}
                            onChange={(e) => handleChange(e, feature)}
                            required
                        />
                        <small>
                            Range: {Math.round(ranges[feature].min)} – {Math.round(ranges[feature].max)}
                        </small>
                    </div>
                ))}

                <button type="submit">Predict</button>
            </form>

            {predictLoading && <Loader text="Predicting..."/>}
            {prediction !== null && <PredictionCard value={prediction} />}
        </div>
    );
};

export default WeatherForm;