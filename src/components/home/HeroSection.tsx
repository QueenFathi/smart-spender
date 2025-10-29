import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, PlayCircle, Star, Zap, Trophy, Gamepad2, Shield, Rocket } from 'lucide-react'
import Image from "next/image"
import AnimatedText from "@/components/global/AnimatedText"
import AnimatedSection from "@/components/global/AnimatedSection"
import Link from "next/link"


export default function HeroSection() {
  return (
    <section className="w-full pb-12 md:pb-24 lg:pb-32 pt-20 md:pt-40 lg:pt-52 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-yellow-500/10"></div>
      <div className="container px-4 md:px-6 mx-auto relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-green-500 to-yellow-500 text-white hover:from-green-600 hover:to-yellow-600 w-fit">
                🎮 Level Up Your Money Game
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
                <AnimatedText text="Turn Money Stress into" />{" "}
                <AnimatedText text="Money Success" className="bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent" />
              </h1>
              <p className="max-w-[600px] text-gray-700 md:text-xl leading-relaxed">
                🚀 Master budgeting, crush debt, and build wealth through addictive games and challenges.
                Join 50K+ players who've already transformed their financial lives!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                  <Trophy className="h-4 w-4 text-white" />
                </div>
                Save #50,000+ monthly
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                Learn in 10 min/day
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                Boost credit score
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
                  <Rocket className="h-4 w-4 text-white" />
                </div>
                Build wealth faster
              </div>
            </div>

            <div className="flex flex-row gap-3">
              <Link href="/learn"><Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:scale-105 transition-transform duration-300">
                <Gamepad2 className="mr-2 h-5 w-5" />
                Start Playing Free
              </Button></Link>
              <Button variant="outline" size="lg" className="border-green-500 text-green-600 hover:bg-green-50 hover:scale-105 transition-transform duration-300">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <span className="font-medium ml-1">4.9/5 (2.1K reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-green-500" />
                <span>50K+ active players</span>
              </div>
            </div>
          </div>

          <AnimatedSection>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-yellow-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
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