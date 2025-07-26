'use client';

import { useState, useEffect } from 'react';

export default function Weather() {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      const res = await fetch('https://blog.apiki.com/wp-json/wp/v2/');
      const data = await res.json();
      setForecast(data);
    }
    fetchWeather();
  }, []);

  if (!forecast) return <div>Loading...</div>;

  return (
    <div>
      <h2>Current Weatherwewe wewe</h2>
      <p>{forecast.namespace}</p>
    </div>
  );
}