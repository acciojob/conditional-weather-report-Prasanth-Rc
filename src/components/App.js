
import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';
import '../styles/App.css';

function App() {
  const [weather] = useState({
    temperature: 25,
    conditions: "Sunny"
  });

  return (
    <div className="app-container">
      <h1>City Weather</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App
