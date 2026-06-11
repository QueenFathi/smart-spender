import Link from "next/link";
import { PiggyBank, Zap } from "lucide-react";

export default function () {
  return (
    <footer className="flex flex-col gap-5 sm:flex-row py-10 w-full shrink-0 items-center px-5 border-t bg-white">
      <div className="flex items-center gap-2">
        <div className="relative">
          <PiggyBank className="h-6 w-6 text-primary" />
          <Zap className="h-3 w-3 text-secondary absolute -top-1 -right-1" />
        </div>
        <span className="font-bold bg-primary bg-clip-text text-transparent">
          Smart Spender
        </span>
      </div>
      <nav className="sm:ml-auto flex gap-5 text-xs">
        <Link href="#" className="text-gray-500 hover:primary transition-colors">Privacy</Link>
        <Link href="#" className="text-gray-500 hover:primary transition-colors">Terms</Link>
        <Link href="#" className="text-gray-500 hover:primary transition-colors">Support</Link>
      </nav>
      <p className="text-xs text-gray-500 sm:ml-4">
        © 2025 Smart Spender. Made with 💚 by Queen Creations.
      </p>
    </footer>
  )
}