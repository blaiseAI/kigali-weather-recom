import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-white mb-8">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-blue-100 dark:text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="space-y-6">
          <div className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Helpful Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  ← Back to Weather Dashboard
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/Tuganeb21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Visit Project Repository
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Why am I seeing this?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              This could be because:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-2">
              <li>The page has been moved or deleted</li>
              <li>You typed the wrong URL</li>
              <li>The link you clicked might be outdated</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 