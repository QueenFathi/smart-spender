"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-6 h-16 lg:h-20 flex items-center">
        <Logo />
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/learn" className="text-sm font-medium hover:text-green-500 transition-colors">
            Learn
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-green-500 transition-colors">
            Blog
          </Link>
          <Link href="#account" className="text-sm font-medium hover:text-green-500 transition-colors">
            Account
          </Link>
          <Link href="#download" className="text-sm font-medium hover:text-green-500 transition-colors">
            Get App
          </Link>
        </nav>
      </div>
    </header>
  );
}
