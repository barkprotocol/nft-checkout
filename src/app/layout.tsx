import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Wallet } from '@/components/component/Wallet';

// Load Inter font with Latin subset
const inter = Inter({ subsets: ['latin'] });

// Define metadata for the page
export const metadata: Metadata = {
  title: 'BARK',
  description: 'Blood Donation Dapp',
};

// Retrieve Google API Key from environment variables
const GoogleApiKey = process.env.NEXT_PUBLIC_GOOGLE_API;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Conditionally load Google Maps API script only if the API key is present */}
        <script
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=${GoogleApiKey || ''}&libraries=places`}
          // Optional: Consider logging a warning or error if the API key is missing
          // Uncomment the following line if you want to log a warning in the console:
          // onError={() => console.warn('Google API Key is missing. Some features might not work.')}
        ></script>
      </head>
      <body className={inter.className}>
        <Wallet>
          {children}
        </Wallet>
      </body>
    </html>
  );
}
