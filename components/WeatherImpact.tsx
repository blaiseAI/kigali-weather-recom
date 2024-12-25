interface WeatherImpactProps {
  weather: {
    main: { temp: number; humidity: number };
    wind: { speed: number };
    weather: Array<{ main: string }>;
  };
}

interface Activities {
  outdoor: boolean;
  sports: boolean;
  laundry: boolean;
  messages: string[];
}

export default function WeatherImpact({ weather }: WeatherImpactProps) {
  const getActivities = () => {
    const temp = weather.main.temp;
    const humidity = weather.main.humidity;
    const windSpeed = weather.wind.speed;
    const condition = weather.weather[0].main.toLowerCase();

    const activities: Activities = {
      outdoor: true,
      sports: true,
      laundry: true,
      messages: []
    };

    // Temperature impacts
    if (temp > 30) {
      activities.sports = false;
      activities.messages.push('🏃‍♂️ Not ideal for outdoor exercise');
    }

    // Wind impacts
    if (windSpeed > 20) {
      activities.laundry = false;
      activities.messages.push('👕 Not recommended for drying clothes outside');
    }

    // Weather condition impacts
    if (['rain', 'thunderstorm'].includes(condition)) {
      activities.outdoor = false;
      activities.laundry = false;
      activities.messages.push('🌂 Indoor activities recommended');
    }

    return activities;
  };

  const activities = getActivities();

  return (
    <div className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-xl p-6 mt-8">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
        Weather Impact
      </h2>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <span className="text-2xl mb-2">
              {activities.outdoor ? '✅' : '❌'}
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Outdoor Activities
            </p>
          </div>
          <div className="text-center">
            <span className="text-2xl mb-2">
              {activities.sports ? '✅' : '❌'}
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Sports & Exercise
            </p>
          </div>
          <div className="text-center">
            <span className="text-2xl mb-2">
              {activities.laundry ? '✅' : '❌'}
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Laundry Drying
            </p>
          </div>
        </div>
        {activities.messages.length > 0 && (
          <div className="border-t pt-4 mt-4">
            {activities.messages.map((message, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300">
                {message}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 