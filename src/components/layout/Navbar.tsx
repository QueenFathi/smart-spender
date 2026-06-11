"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-(--max-width-lg) mx-auto px-5 h-16 lg:h-20 flex items-center">
        <Logo />
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/learn" className="text-sm font-medium hover:text-primary transition-colors">
            Learn
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="#account" className="text-sm font-medium hover:text-primary transition-colors">
            Account
          </Link>
          <Link href="#download" className="text-sm font-medium hover:text-primary transition-colors">
            Get App
          </Link>
        </nav>
      </div>
    </header>
  );
}
