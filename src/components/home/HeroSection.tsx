import Link from "next/link"
import Image from "next/image"
import { PlayCircle, Zap, Trophy, Gamepad2, Shield, Rocket } from 'lucide-react'
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/global/AnimatedText"
import AnimatedSection from "@/components/global/AnimatedSection"


export default function HeroSection() {
  return (
    <section id="hero" className="w-full pt-20 pb-20 relative overflow-hidden bg-linear-to-br from-white to-background">
      <div className="max-w-(--max-width-lg) mx-auto px-5">
        <div className="grid gap-5 lg:grid-cols-[1fr_400px] lg:gap-10 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-10">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
                <AnimatedText text="Turn Money Stress into" />{" "}
                <AnimatedText text="Money Success" className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent" />
              </h1>
              <p className="text-sm md:text-lg">
                Master budgeting, crush debt, and build wealth through addictive games and challenges.
                Join 50K+ players who've already transformed their financial lives!
              </p>
            </div>

            <div className="flex gap-5">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <div className="p-2 rounded-full bg-primary flex items-center justify-center">
                    <Trophy className="h-4 w-4 text-white" />
                  </div>
                  Save #50,000+ monthly
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <div className="p-2 rounded-full bg-primary flex items-center justify-center">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  Boost credit score
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <div className="p-2 rounded-full bg-secondary flex items-center justify-center">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  Learn in 10 min/day
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <div className="p-2 rounded-full bg-secondary flex items-center justify-center">
                    <Rocket className="h-4 w-4 text-white" />
                  </div>
                  Build wealth faster
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-3">
              <Link href="/learn">
                <Button className="bg-linear-to-r from-primary/10 to-primary text-white shadow-lg hover:scale-102 transition-transform duration-200 rounded-full">
                  <Gamepad2 className="mr-1 h-5 w-5" />
                  Start Playing Free
                </Button>
              </Link>
              <Button variant="outline" className="text-primary hover:bg-primary/5 hover:scale-102 transition-transform duration-200 rounded-full">
                <PlayCircle className="mr-1 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          <AnimatedSection>
            <div className="hidden lg:flex items-center justify-end">
              <div className="relative">
                <Image
                  src="/illustration-graphic.jpg"
                  alt="Smart Spender App Interface"
                  width={400}
                  height={400}
                  className="relative rounded-3xl shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}