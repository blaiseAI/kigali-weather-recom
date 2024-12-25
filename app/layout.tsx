import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kigali Weather Tracker | Real-time Weather Updates',
  description: 'Get accurate, real-time weather forecasts for Kigali, Rwanda. View current conditions, 5-day forecast, temperature, humidity, wind speed, and more.',
  keywords: 'Kigali weather, Rwanda weather, weather forecast Kigali, Kigali temperature, Kigali weather forecast, Rwanda weather forecast',
  metadataBase: new URL('https://kigali-weather.vercel.app'),
  openGraph: {
    title: 'Kigali Weather Tracker | Real-time Weather Updates',
    description: 'Get accurate, real-time weather forecasts for Kigali, Rwanda. View current conditions, 5-day forecast, temperature, humidity, wind speed, and more.',
    type: 'website',
    locale: 'en_US',
    url: 'https://kigali-weather.vercel.app',
    siteName: 'Kigali Weather Tracker',
    images: [
      {
        url: 'https://kigali-weather.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kigali Weather Tracker'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kigali Weather Tracker | Real-time Weather Updates',
    description: 'Get accurate, real-time weather forecasts for Kigali, Rwanda',
    images: ['https://kigali-weather.vercel.app/og-image.png']
  },
  alternates: {
    canonical: 'https://kigali-weather.vercel.app'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        <link rel="canonical" href="https://kigali-weather.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
