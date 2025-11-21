import localFont from "next/font/local";
import { Metadata } from 'next';
import "./globals.css";
import "@radix-ui/themes/styles.css";
import Footer from "@/components/layout/Footer";
import { ThemeSwitcher } from "@/components/global/theme-switcher";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Smart Spender",
  description: "Making financial education fun and effective",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-slate-900 dark:text-white`}
      >
        <ThemeSwitcher />
        {children}
        <Footer />
      </body>
    </html>
  );
}
