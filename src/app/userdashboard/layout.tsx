import { Inter } from "next/font/google";
import { PublicKeyProvider } from "@/components/context/PublicKeyContext";
import Head from 'next/head';

// Load the Inter font with the Latin subset
const inter = Inter({ subsets: ["latin"] });

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Meta tags for character set, viewport, and description */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Blood Donation Dapp - Manage your donations and track blood donation events." />
        <meta name="keywords" content="Blood Donation, Charity, Dapp, Solana, Donations" />
        <meta name="author" content="Your Name or Organization" />
        <link rel="icon" href="/favicon.ico" />
        {/* Link to a global stylesheet */}
        <link rel="stylesheet" href="/styles/global.css" />
        {/* Add any additional meta tags or link tags as needed */}
      </Head>
      <body className={inter.className}>
        {/* Wrap the application with PublicKeyProvider */}
        <PublicKeyProvider>
          {children}
        </PublicKeyProvider>
      </body>
    </html>
  );
}
