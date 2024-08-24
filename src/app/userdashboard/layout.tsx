import { Inter } from "next/font/google";
import { PublicKeyProvider } from "@/components/context/PublicKeyContext";

// Load the Inter font with the Latin subset
const inter = Inter({ subsets: ["latin"] });

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add any necessary meta tags or link tags here */}
      </head>
      <body className={inter.className}>
        <PublicKeyProvider>
          {children}
        </PublicKeyProvider>
      </body>
    </html>
  );
}
