import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { Righteous as Display } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';


import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontDisplay = Display({
  weight: '400',
  variable: '--font-display',
  preload: false,
});

export const metadata: Metadata = {
  title: 'Soundcaster',
  description: 'An audio focused Farcaster client supporting onchain music',
  openGraph: {
    title: 'Soundcaster',
    description: 'An audio focused Farcaster client supporting onchain music',
    url: 'https://Soundcaster.xyz',
    siteName: 'Soundcaster',
    images: [
      {
        url:`https://www.Soundcaster.xyz/`,
        width: 1200,
        height: 630
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soundcaster',
    description: 'An audio focused Farcaster client supporting onchain music',
    creator: '@soundcaster',
    images: ['https://www.Soundcaster.xyz/'], // Must be an absolute URL
  },
  icons: {
    icon: '/favicon.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
            <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>

      <body
        className={cn(
          'min-h-screen w-full flex flex-col items-center justify-center bg-background font-sans antialiased',
          fontSans.variable,
          fontDisplay.variable,
        )}
      >
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Analytics />
          </ThemeProvider>
      </body>
    </html>
  );
}
