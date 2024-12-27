import{ useEffect, useState } from "react";
import './WeatherDisplay.css';
import PropTypes from "prop-types";
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';

const WeatherDisplay = ({ city, onBack }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  useEffect(() => {
    const fetchWeather = async () => {
      const API_KEY = import.meta.env.VITE_APP_ID;
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        const data = await response.json();
        if (response.ok) {
          const icon = allIcons[data.weather[0]?.icon] || clear_icon;
          setWeatherData({
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            temperature: Math.floor(data.main.temp),
            location: data.name,
            icon: icon,
          });
        } else {
          alert("Weather data not found for the selected city");
          setWeatherData(null);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="weather">
      <button className="back-button" onClick={onBack}>
        ← Back to Saved Locations
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : weatherData ? (
        <>
          <img src={weatherData.icon} className="weather-icon" alt="Weather" />
          <p className="temprature">{weatherData.temperature}°C</p>
          <p className="location">{weatherData.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="Humidity" />
              <div>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="Wind Speed" />
              <div>
                <p>{weatherData.windSpeed} km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>

          </div>
          
          
        </>
          
      ) : (
        <p>Unable to fetch weather data</p>
      )}
      
    </div>
  );
};
WeatherDisplay.propTypes = {
    city: PropTypes.string.isRequired, 
    onBack: PropTypes.func.isRequired, 
  };
  
export default WeatherDisplay;
