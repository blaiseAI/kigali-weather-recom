"use client";

import { WiHumidity, WiStrongWind, WiBarometer, WiThermometer } from 'react-icons/wi';
import WeatherMetric from './WeatherMetric';

interface WeatherCardProps {
  weather: any;
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-xl p-6 transition-all hover:shadow-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            {Math.round(weather.main.temp)}°C
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-1">
            Feels like {Math.round(weather.main.feels_like)}°C
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
        </div>
        
        <div className="flex flex-col items-center mt-4 md:mt-0">
          <img 
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt={weather.weather[0].description}
            className="w-32 h-32"
          />
          <p className="text-lg text-gray-700 dark:text-gray-200 capitalize">
            {weather.weather[0].description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <WeatherMetric
          icon={<WiThermometer />}
          label="High / Low"
          value={`${Math.round(weather.main.temp_max)}° / ${Math.round(weather.main.temp_min)}°`}
        />
        <WeatherMetric
          icon={<WiHumidity />}
          label="Humidity"
          value={`${weather.main.humidity}%`}
        />
        <WeatherMetric
          icon={<WiStrongWind />}
          label="Wind Speed"
          value={`${Math.round(weather.wind.speed * 3.6)} km/h`}
        />
        <WeatherMetric
          icon={<WiBarometer />}
          label="Pressure"
          value={`${weather.main.pressure} hPa`}
        />
      </div>
    </div>
  );
}