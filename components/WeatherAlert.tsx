interface WeatherAlertProps {
  weather: {
    main: { temp: number };
    rain?: { "1h": number };
    clouds: { all: number };
  };
}

export default function WeatherAlert({ weather }: WeatherAlertProps) {
  const getAlerts = () => {
    const alerts = [];
    
    // Temperature alerts
    if (weather.main.temp > 30) {
      alerts.push({
        type: 'heat',
        message: 'High temperature alert! Stay hydrated and avoid prolonged sun exposure.',
        icon: '🌡️'
      });
    }

    // Rain alerts
    if (weather.rain && weather.rain["1h"] > 10) {
      alerts.push({
        type: 'rain',
        message: 'Heavy rain expected. Consider indoor activities.',
        icon: '🌧️'
      });
    }

    // UV Index based on cloud cover
    if (weather.clouds.all < 30) {
      alerts.push({
        type: 'uv',
        message: 'High UV levels expected. Use sun protection.',
        icon: '☀️'
      });
    }

    return alerts;
  };

  const alerts = getAlerts();

  if (alerts.length === 0) return null;

  return (
    <div className="mt-8">
      {alerts.map((alert, index) => (
        <div 
          key={alert.type}
          className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-xl p-4 mb-4 
                     border-l-4 border-yellow-500 animate-pulse"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{alert.icon}</span>
            <p className="text-gray-800 dark:text-white font-medium">
              {alert.message}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
} 