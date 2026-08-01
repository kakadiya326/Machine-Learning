export const FEATURE_METADATA = {
  air_pressure_9am: {
    label: "Air Pressure",
    group: "atmosphere",
    unit: "hPa",
    min: 907.99,
    max: 929.32,
    defaultVal: 918.0,
    description: "Atmospheric pressure at 9 AM"
  },
  air_temp_9am: {
    label: "Air Temperature",
    group: "atmosphere",
    unit: "°F",
    min: 36.75,
    max: 98.91,
    defaultVal: 68.5,
    description: "Ambient air temperature at 9 AM"
  },
  relative_humidity_9am: {
    label: "Relative Humidity",
    group: "atmosphere",
    unit: "%",
    min: 6.09,
    max: 92.62,
    defaultVal: 52.0,
    description: "Morning humidity percentage"
  },
  avg_wind_direction_9am: {
    label: "Avg Wind Direction",
    group: "wind",
    unit: "°",
    min: 15.5,
    max: 343.4,
    defaultVal: 180.0,
    description: "Average wind heading degrees"
  },
  avg_wind_speed_9am: {
    label: "Avg Wind Speed",
    group: "wind",
    unit: "mph",
    min: 0.69,
    max: 23.55,
    defaultVal: 6.8,
    description: "Average wind speed at 9 AM"
  },
  max_wind_direction_9am: {
    label: "Max Wind Direction",
    group: "wind",
    unit: "°",
    min: 28.9,
    max: 312.2,
    defaultVal: 195.0,
    description: "Peak wind direction heading"
  },
  max_wind_speed_9am: {
    label: "Max Wind Speed",
    group: "wind",
    unit: "mph",
    min: 1.19,
    max: 29.84,
    defaultVal: 9.5,
    description: "Peak wind speed gust at 9 AM"
  },
  rain_accumulation_9am: {
    label: "Rain Accumulation",
    group: "precipitation",
    unit: "mm",
    min: 0.0,
    max: 24.02,
    defaultVal: 0.0,
    description: "Total rainfall accumulated by 9 AM"
  },
  rain_duration_9am: {
    label: "Rain Duration",
    group: "sec",
    unit: "sec",
    min: 0.0,
    max: 17704.0,
    defaultVal: 0.0,
    description: "Duration of rainfall before 9 AM"
  }
};

export const PRESET_SCENARIOS = [
  {
    id: "sunny_dry",
    name: "☀️ Sunny & Clear Morning",
    values: {
      air_pressure_9am: 922.5,
      air_temp_9am: 78.4,
      avg_wind_direction_9am: 165.0,
      avg_wind_speed_9am: 4.2,
      max_wind_direction_9am: 180.0,
      max_wind_speed_9am: 6.5,
      rain_accumulation_9am: 0.0,
      rain_duration_9am: 0,
      relative_humidity_9am: 32.5
    }
  },
  {
    id: "rainy_storm",
    name: "🌧️ Rainy & Damp Morning",
    values: {
      air_pressure_9am: 911.2,
      air_temp_9am: 54.2,
      avg_wind_direction_9am: 210.0,
      avg_wind_speed_9am: 14.5,
      max_wind_direction_9am: 225.0,
      max_wind_speed_9am: 21.0,
      rain_accumulation_9am: 12.8,
      rain_duration_9am: 8400,
      relative_humidity_9am: 86.4
    }
  },
  {
    id: "cool_breezy",
    name: "🌬️ Cool & Breezy",
    values: {
      air_pressure_9am: 918.7,
      air_temp_9am: 48.0,
      avg_wind_direction_9am: 95.0,
      avg_wind_speed_9am: 11.2,
      max_wind_direction_9am: 110.0,
      max_wind_speed_9am: 16.8,
      rain_accumulation_9am: 0.2,
      rain_duration_9am: 300,
      relative_humidity_9am: 61.2
    }
  },
  {
    id: "hot_muggy",
    name: "🔥 Warm High Humidity",
    values: {
      air_pressure_9am: 915.0,
      air_temp_9am: 88.5,
      avg_wind_direction_9am: 190.0,
      avg_wind_speed_9am: 3.8,
      max_wind_direction_9am: 205.0,
      max_wind_speed_9am: 5.5,
      rain_accumulation_9am: 2.5,
      rain_duration_9am: 1800,
      relative_humidity_9am: 78.9
    }
  }
];

export const FEATURE_IMPORTANCE = [
  { name: "Relative Humidity (9 AM)", weight: 0.62, impact: "positive", desc: "Strongest direct predictor of 3 PM humidity" },
  { name: "Air Temperature (9 AM)", weight: -0.28, impact: "negative", desc: "Higher morning temperature decreases relative humidity" },
  { name: "Rain Duration (9 AM)", weight: 0.18, impact: "positive", desc: "Sustained rainfall increases afternoon moisture" },
  { name: "Air Pressure (9 AM)", weight: 0.12, impact: "positive", desc: "Barometric pressure changes affect atmospheric stability" },
  { name: "Avg Wind Speed (9 AM)", weight: -0.09, impact: "negative", desc: "Higher winds assist in moisture evaporation and dispersal" },
  { name: "Rain Accumulation", weight: 0.07, impact: "positive", desc: "Total precipitation volume adds ambient moisture" }
];
