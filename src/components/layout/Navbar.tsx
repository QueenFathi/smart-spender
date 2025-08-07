"use client";

import { PiggyBank, Zap } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-6 h-16 lg:h-20 flex items-center">
        <div className="flex items-center justify-center">
        <div className="relative">
          <PiggyBank className="h-8 w-8 text-green-500" />
          <Zap className="h-4 w-4 text-yellow-500 absolute -top-1 -right-1" />
        </div>
        <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
          Smart Spender
        </span>
      </div>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="#features" className="text-sm font-medium hover:text-green-500 transition-colors">
          Features
        </Link>
        <Link href="#results" className="text-sm font-medium hover:text-green-500 transition-colors">
          Results
        </Link>
        <Link href="#blog" className="text-sm font-medium hover:text-green-500 transition-colors">
          Tips
        </Link>
        <Link href="#download" className="text-sm font-medium hover:text-green-500 transition-colors">
          Get App
        </Link>
      </nav>
      </div>
    </header>
  );
}
