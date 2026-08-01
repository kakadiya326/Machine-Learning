/**
 * Local fallback estimator in case backend endpoint is sleeping (Render free tier cold start)
 * Uses physical atmospheric correlation approximation.
 */
export const estimateHumidityLocal = (formData) => {
  const h9 = parseFloat(formData.relative_humidity_9am) || 50;
  const temp9 = parseFloat(formData.air_temp_9am) || 68;
  const press9 = parseFloat(formData.air_pressure_9am) || 918;
  const rainDur = parseFloat(formData.rain_duration_9am) || 0;
  const windSpeed = parseFloat(formData.avg_wind_speed_9am) || 7;

  // Temperature expansion factor (higher temp lowers relative humidity)
  const tempFactor = (68 - temp9) * 0.35;
  // Rain humidity persistence
  const rainFactor = Math.min(rainDur / 600, 15);
  // Wind evaporation factor
  const windFactor = -1 * (windSpeed * 0.4);
  // Pressure factor
  const pressFactor = (press9 - 918) * 0.15;

  let estimated3pm = h9 * 0.72 + tempFactor + rainFactor + windFactor + pressFactor + 12;
  
  // Clamp between 5% and 98%
  return Math.min(Math.max(estimated3pm, 5.0), 98.0);
};
