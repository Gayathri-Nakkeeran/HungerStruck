import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Eczar } from "next/font/google";
import DataProvider from "../components/DataProvider";
const eczar = Eczar({ subsets: ["latin"], variable: "--font-eczar" });
import "./globals.css";

export const metadata: Metadata = {
  title: "Tasty Treat",
  description: "Food ordering application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${eczar.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
