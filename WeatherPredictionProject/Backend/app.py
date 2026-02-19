from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import json

app = Flask(__name__)
CORS(app)

# Load model & scaler
model = joblib.load("model/humidity_model.pkl")
scaler = joblib.load("model/scaler.pkl")

with open("model/feature_ranges.json") as f:
    feature_ranges = json.load(f)

@app.route("/")
def home():
    return "Server working"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    features = np.array([[
        data["air_pressure_9am"],
        data["air_temp_9am"],
        data["avg_wind_direction_9am"],
        data["avg_wind_speed_9am"],
        data["max_wind_direction_9am"],
        data["max_wind_speed_9am"],
        data["rain_accumulation_9am"],
        data["rain_duration_9am"],
        data["relative_humidity_9am"]
    ]])

    # Scale features
    features_scaled = scaler.transform(features)

    prediction = model.predict(features_scaled)

    return jsonify({
        "predicted_humidity_3pm": float(prediction[0])
    })

@app.route("/ranges")
def get_ranges():
    return jsonify(feature_ranges)

if __name__ == "__main__":
    # app.run(debug=True,use_reloader=False)
    app.run(host="0.0.0.0",port=5000)
