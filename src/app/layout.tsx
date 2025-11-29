'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import SplashScreen from '@/components/splash-screen';

// This metadata can't be exported from a client component, but we can keep it for reference.
// The actual metadata should be handled in a server component if needed.
// export const metadata: Metadata = {
//   title: 'Global Petrotech SPC',
//   description:
//     'Leading provider of comprehensive services in the Oil & Gas, Power, Energy, and Infrastructure sectors.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Start the fade-out animation after a delay
    const finishTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // This should be slightly less than the removal timer

    return () => {
      clearTimeout(finishTimer);
    };
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Global Petrotech SPC</title>
        <meta
          name="description"
          content="Leading provider of comprehensive services in the Oil & Gas, Power, Energy, and Infrastructure sectors."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {isLoading && <SplashScreen isFinishing={!isLoading} />}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
