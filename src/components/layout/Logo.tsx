import { PiggyBank, Zap } from "lucide-react";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <PiggyBank className="h-8 w-8 text-green-500" />
                    <Zap className="h-4 w-4 text-yellow-500 absolute -top-1 -right-1" />
                </div>
                <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                    Smart Spender
                </span>
            </div>
        </Link>
    )
}