interface WeatherMetricProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export default function WeatherMetric({ icon, label, value }: WeatherMetricProps) {
  return (
    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-xl p-4">
      <div className="text-2xl text-blue-500 dark:text-blue-400">{icon}</div>
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-300">{label}</p>
        <p className="text-lg font-semibold text-gray-800 dark:text-white">{value}</p>
      </div>
    </div>
  );
} 