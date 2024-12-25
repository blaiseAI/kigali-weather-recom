import { WiThermometer } from 'react-icons/wi';

interface ForecastSectionProps {
  forecast: {
    list: Array<{
      dt: number;
      main: {
        temp: number;
        temp_min: number;
        temp_max: number;
      };
      weather: Array<{
        description: string;
        icon: string;
      }>;
    }>;
  };
}

export default function ForecastSection({ forecast }: ForecastSectionProps) {
  console.log('Forecast Data:', forecast); // Debug log

  // Get unique days (excluding today)
  const dailyForecasts = forecast.list
    .reduce((acc: any[], item) => {
      const date = new Date(item.dt * 1000);
      const dateString = date.toDateString();
      
      // Only take the first forecast for each day
      if (!acc.find(x => new Date(x.dt * 1000).toDateString() === dateString)) {
        acc.push(item);
      }
      return acc;
    }, [])
    .slice(1, 6); // Take next 5 days

  return (
    <div className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        5-Day Forecast
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {dailyForecasts.map((day) => {
          const date = new Date(day.dt * 1000);
          return (
            <div 
              key={day.dt}
              className="bg-white/20 dark:bg-gray-700/20 rounded-xl p-4 text-center"
            >
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {date.toLocaleDateString('en-US', { weekday: 'short' })}
              </p>
              <img 
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
                className="w-16 h-16 mx-auto"
              />
              <div className="flex items-center justify-center gap-2 text-gray-800 dark:text-white">
                <WiThermometer className="text-2xl text-blue-500" />
                <span className="font-semibold">{Math.round(day.main.temp)}°C</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 capitalize">
                {day.weather[0].description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
} 