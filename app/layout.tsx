import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kigali Weather Tracker | Real-time Weather Updates',
  description: 'Get accurate, real-time weather forecasts for Kigali, Rwanda. View current conditions, 5-day forecast, temperature, humidity, wind speed, and more.',
  keywords: 'Kigali weather, Rwanda weather, weather forecast Kigali, Kigali temperature, Kigali weather forecast, Rwanda weather forecast',
  openGraph: {
    title: 'Kigali Weather Tracker | Real-time Weather Updates',
    description: 'Get accurate, real-time weather forecasts for Kigali, Rwanda. View current conditions, 5-day forecast, temperature, humidity, wind speed, and more.',
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Kigali Weather Tracker'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kigali Weather Tracker | Real-time Weather Updates',
    description: 'Get accurate, real-time weather forecasts for Kigali, Rwanda'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://your-domain.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
