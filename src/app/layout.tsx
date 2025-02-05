import type { Metadata } from "next";
import { Expletus_Sans, Asap } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const expletusSans = Expletus_Sans({
  variable: "--font-expletus-sans",
  subsets: ["latin"],
});

const asap = Asap({
  variable: "--font-asap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Triyo Krismantoro Portfolio",
  description: "Triyo Krismantoro's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${expletusSans.variable} ${asap.variable} antialiased`}
      >
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
