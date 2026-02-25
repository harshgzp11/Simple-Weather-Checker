import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);
  const [isCelsius, setIsCelsius] = useState(true);

  const API_KEY = '6ac388b4c0c944155282b518c3fe4528';

  const fetchWeather = async (cityName) => {
    if (!cityName) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error('City not found');
      
      const data = await response.json();
      setWeather(data);
      
      setHistory((prev) => {
        if (prev.includes(data.name)) return prev;
        return [data.name, ...prev].slice(0, 10);
      });

    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather('Bengaluru'); 
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
    setCity('');
  };

  const displayTemp = (tempInCelsius) => {
    if (isCelsius) return Math.round(tempInCelsius) + '°C';
    return Math.round((tempInCelsius * 9/5) + 32) + '°F';
  };

  return (
    <div className="app-container">
      <h1>Simple Weather Checker</h1>

      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Enter city name..." 
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      <button onClick={() => setIsCelsius(!isCelsius)} className="toggle-button">
        Switch to {isCelsius ? 'Fahrenheit' : 'Celsius'}
      </button>

      {loading && <p className="status-text">Loading weather data...</p>}
      {error && <p className="status-text" style={{color: '#ef4444'}}>{error}</p>}

      {weather && !loading && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          
          <img 
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} 
            alt="weather icon" 
            className="weather-icon-img"
          />

          <p className="temperature">{displayTemp(weather.main.temp)}</p>
          <p className="condition">{weather.weather[0].description}</p>
        </div>
      )}

      {history.length > 0 && (
        <div className="history-section">
          <h3>Recent Searches:</h3>
          <ul>
            {history.map((h) => (
              <li key={h} onClick={() => fetchWeather(h)}>
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default App