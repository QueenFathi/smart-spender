import { PiggyBank, Zap } from "lucide-react";
import Link from "next/link";

export default function () {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
      <div className="flex items-center gap-2">
        <div className="relative">
          <PiggyBank className="h-6 w-6 text-green-500" />
          <Zap className="h-3 w-3 text-yellow-500 absolute -top-1 -right-1" />
        </div>
        <span className="text-sm font-medium bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
          Smart Spender
        </span>
      </div>
      <nav className="sm:ml-auto flex gap-4 text-sm">
        <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors">Privacy</Link>
        <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors">Terms</Link>
        <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors">Support</Link>
      </nav>
      <p className="text-xs text-gray-500 sm:ml-4">
        © 2025 Smart Spender. Made with 💚 by Queen Creations.
      </p>
    </footer>
  )
}