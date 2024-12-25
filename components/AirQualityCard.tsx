import { WiDust } from 'react-icons/wi';

interface AirQualityCardProps {
  airQuality: {
    list: [{
      main: {
        aqi: number;
      };
      components: {
        co: number;
        no2: number;
        o3: number;
        pm2_5: number;
        pm10: number;
      };
    }];
  };
}

export default function AirQualityCard({ airQuality }: AirQualityCardProps) {
  const getAQILabel = (aqi: number) => {
    switch(aqi) {
      case 1: return { label: 'Good', color: 'text-green-500' };
      case 2: return { label: 'Fair', color: 'text-yellow-500' };
      case 3: return { label: 'Moderate', color: 'text-orange-500' };
      case 4: return { label: 'Poor', color: 'text-red-500' };
      case 5: return { label: 'Very Poor', color: 'text-purple-500' };
      default: return { label: 'Unknown', color: 'text-gray-500' };
    }
  };

  const aqiInfo = getAQILabel(airQuality.list[0].main.aqi);

  return (
    <div className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <WiDust className="text-3xl text-blue-500" />
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Air Quality
        </h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className={`text-center ${aqiInfo.color}`}>
          <p className="text-2xl font-bold">{aqiInfo.label}</p>
          <p className="text-sm">AQI</p>
        </div>
        
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800 dark:text-white">
            {airQuality.list[0].components.pm2_5.toFixed(1)}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">PM2.5</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800 dark:text-white">
            {airQuality.list[0].components.pm10.toFixed(1)}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">PM10</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800 dark:text-white">
            {airQuality.list[0].components.o3.toFixed(1)}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">Ozone</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800 dark:text-white">
            {airQuality.list[0].components.no2.toFixed(1)}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">NO₂</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800 dark:text-white">
            {airQuality.list[0].components.co.toFixed(1)}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">CO</p>
        </div>
      </div>
    </div>
  );
} 