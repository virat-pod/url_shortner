import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ServiceProvider } from "@/lib/contexts/serviceContext";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-oswald",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "URL Shortners | Simple Slug",
  description: "Generate your long url - to short slug | open source",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${oswald.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <ServiceProvider>{children}</ServiceProvider>
      </body>
    </html>
  );
}
