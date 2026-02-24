import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h1>Weather Humidity Prediction System</h1>

      <h2>What This Project Does</h2>
      <p>
        This machine learning web application predicts the relative humidity at 3PM
        using weather conditions recorded at 9AM.
      </p>

      <h2>How It Works</h2>
      <ul>
        <li>Uses Linear Regression model trained on historical weather data</li>
        <li>Scales inputs using StandardScaler</li>
        <li>Backend built with Flask API</li>
        <li>Frontend built with React</li>
        <li>Deployed on Render and Vercel</li>
      </ul>

      <h2>How To Use</h2>
      <ol>
        <li>Go to Predict page</li>
        <li>Enter weather values within allowed ranges</li>
        <li>Click Predict</li>
        <li>View predicted humidity result instantly</li>
      </ol>

      <h2>Technologies Used</h2>
      <p>
        Python, Scikit-learn, Flask, React, Axios, Render, Vercel
      </p>
    </div>
  );
};

export default About;