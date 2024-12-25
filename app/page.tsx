import WeatherCard from '@/components/WeatherCard';
import ForecastSection from '@/components/ForecastSection';
import AirQualityCard from '@/components/AirQualityCard';
import Script from 'next/script';
import WeatherAlert from '@/components/WeatherAlert';
import WeatherImpact from '@/components/WeatherImpact';

export default async function Home() {
  // Current weather
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Kigali,RW&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`,
    { next: { revalidate: 300 } }
  );
  
  // 5-day forecast
  const forecastResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=Kigali,RW&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`,
    { next: { revalidate: 300 } }
  );

  // Air quality data
  const airQualityResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=-1.9441&lon=30.0619&appid=${process.env.OPENWEATHER_API_KEY}`,
    { next: { revalidate: 300 } }
  );
  
  const weather = await weatherResponse.json();
  const forecast = await forecastResponse.json();
  const airQuality = await airQualityResponse.json();

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Kigali Weather Tracker',
    description: 'Real-time weather updates for Kigali, Rwanda',
    url: 'https://kigali-weather.vercel.app',
    mainEntity: {
      '@type': 'WeatherForecast',
      about: 'Kigali, Rwanda Weather',
      temperature: {
        '@type': 'QuantitativeValue',
        value: Math.round(weather.main.temp),
        unitCode: 'CEL'
      },
      humidity: {
        '@type': 'QuantitativeValue',
        value: weather.main.humidity,
        unitCode: 'PERCENT'
      }
    },
    provider: {
      '@type': 'Organization',
      name: 'Kigali Weather Tracker',
      url: 'https://kigali-weather.vercel.app'
    },
    dateModified: new Date().toISOString()
  };

  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <main className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Kigali Weather Tracker
            </h1>
            <p className="text-blue-100 dark:text-gray-300">
              Real-time weather updates for Kigali, Rwanda
            </p>
            <p className="mt-4 text-sm text-blue-50 dark:text-gray-400 max-w-2xl mx-auto">
              Stay informed with accurate weather forecasts for Kigali. Get current temperature, 
              humidity levels, wind speed, and 5-day weather predictions for Rwanda's capital city.
            </p>
          </div>
          <WeatherCard weather={weather} />
          <WeatherAlert weather={weather} />
          <WeatherImpact weather={weather} />
          <div className="mt-8">
            <AirQualityCard airQuality={airQuality} />
          </div>
          <div className="mt-8">
            <ForecastSection forecast={forecast} />
          </div>
          <footer className="mt-12 text-center text-sm text-blue-100 dark:text-gray-400">
            <p>Data provided by OpenWeather API</p>
            <p className="mt-2">Updated every 5 minutes for maximum accuracy</p>
            <p className="mt-4">
              Created by{' '}
              <a 
                href="https://github.com/Tuganeb21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium hover:text-blue-200 dark:hover:text-gray-300 transition-colors"
              >
                Tugane Brian
              </a>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}