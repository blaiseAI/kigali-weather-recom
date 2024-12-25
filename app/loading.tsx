export default function Loading() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-12 px-4">
      <div className="max-w-5xl mx-auto animate-pulse">
        <div className="text-center mb-12">
          <div className="h-12 w-64 bg-white/30 rounded-lg mx-auto mb-4"></div>
          <div className="h-6 w-48 bg-white/30 rounded-lg mx-auto"></div>
        </div>
        <div className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="h-32 bg-white/20 rounded-xl"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i}
              className="h-24 bg-white/30 dark:bg-gray-800/50 rounded-xl"
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
} 