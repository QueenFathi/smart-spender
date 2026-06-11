import { Metadata } from 'next';
import { Nunito, Nunito_Sans } from "next/font/google";
import Footer from "@/components/layout/Footer";
import "@radix-ui/themes/styles.css";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart Spender",
  description: "Making financial education fun and effective",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${nunitoSans.variable} antialiased`}
    >
      <body className='font-sans'>
        {children}
        <Footer />
      </body>
    </html>
  );
}
