import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, CheckCircle, Gamepad2, BookOpen, Gift } from 'lucide-react'
import Navbar from "@/components/layout/Navbar"
import AnimatedSection from "@/components/global/AnimatedSection"
import BlogSection from "@/components/home/BlogSection"
import HeroSection from "@/components/home/HeroSection"
import AchievementCard from "@/components/home/AchievementCard"
import FeaturesCard from "@/components/home/FeaturesCard"
import { achievements, features } from "@/components/home/HomepageData"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
      <Navbar />
      <main className="flex-1">
        <HeroSection />

        <section id="results" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <AnimatedSection>
              <div className="text-center space-y-4 mb-12">
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                  🏆 Real Results from Real Players
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  See What Players Are Achieving
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
              {achievements.map((ach) => (
                <AchievementCard key={ach.id} achievement={ach} />
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 to-yellow-50">
          <div className="container px-4 md:px-6 mx-auto">
            <AnimatedSection>
              <div className="text-center space-y-4 mb-12">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  🎯 Game-Changing Features
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Why Smart Spender Actually Works
                </h2>
                <p className="max-w-[900px] mx-auto text-gray-600 md:text-xl">
                  Unlike boring financial apps, we make learning addictive through gamification,
                  real-world challenges, and instant rewards.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((item) => (
                <FeaturesCard key={item.id} feature={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <AnimatedSection>
              <div className="text-center space-y-4 mb-12">
                <Badge className="bg-gradient-to-r from-green-500 to-yellow-500 text-white hover:from-green-600 hover:to-yellow-600">
                  💡 Money Tips & Insights
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Level Up Your Financial Knowledge
                </h2>
                <p className="max-w-[600px] mx-auto text-gray-600 md:text-xl">
                  Quick reads, actionable tips, and insider secrets from financial experts
                </p>
              </div>
            </AnimatedSection>

            <BlogSection />

            <div className="text-center mt-8">
              <Link href="/blog">
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read All Tips
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="download" className="w-full py-12 md:py-24 lg:py-36 bg-gradient-to-r from-green-500 via-green-600 to-yellow-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <AnimatedSection>
            <div className="container px-4 md:px-6 mx-auto relative">
              <div className="flex flex-col items-center justify-center space-y-6 text-center text-white">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Gift className="h-8 w-8 text-yellow-300" />
                    <Badge className="bg-yellow-500 text-yellow-900 hover:bg-yellow-500 text-sm sm:text-lg px-4 py-1">
                      Limited Time: Free Premium Access
                    </Badge>
                  </div>
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                    Ready to Win Money?
                  </h2>
                  <p className="max-w-[600px] text-green-100 md:text-xl leading-relaxed">
                    Join 50,000+ players who've already transformed their financial lives.
                    Start your journey to financial freedom today - completely free!
                  </p>
                </div>

                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Link href="/learn" >
                    <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 shadow-xl text-lg px-8 py-4 hover:scale-105 transition-transform duration-300">
                      <Gamepad2 className="mr-2 h-5 w-5" />
                      Start Playing Free
                    </Button>
                  </Link>
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 shadow-xl text-lg px-8 py-4 hover:scale-105 transition-transform duration-300">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm text-green-100 mt-4">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>100% Free to start</span>
                  </div>
                  <div className="sm:flex items-center gap-1 hidden">
                    <CheckCircle className="h-4 w-4" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>Start learning instantly</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>
    </div>
  )
}
