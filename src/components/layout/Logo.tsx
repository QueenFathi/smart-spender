import Link from "next/link";
import { PiggyBank, Zap } from "lucide-react";

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <PiggyBank className="h-8 w-8 text-primary" />
                    <Zap className="h-4 w-4 text-secondary absolute -top-1 -right-1" />
                </div>
                <span className="ml-2 text-2xl font-bold bg-primary bg-clip-text text-transparent">
                    Smart Spender
                </span>
            </div>
        </Link>
    )
}