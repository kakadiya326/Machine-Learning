import React from "react";

const PredictionCard = ({ value }) => {
  return (
    <div className="prediction-card">
      <h2>Predicted Humidity at 3PM</h2>
      <p>{value.toFixed(2)} </p>
    </div>
  );
};

export default PredictionCard;