import Link from "next/link"
import { PlayCircle, CheckCircle, Gamepad2, BookOpen, Gift } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import BlogSection from "@/components/home/BlogSection"
import HeroSection from "@/components/home/HeroSection"
import FeaturesCard from "@/components/home/FeaturesCard"
import AchievementCard from "@/components/home/AchievementCard"
import AnimatedSection from "@/components/global/AnimatedSection"
import { achievements, features } from "@/components/home/HomepageData"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />

      <main className="flex-1">
        <HeroSection />

        <section id="results" className="w-full py-20 bg-white">
          <div className="max-w-(--max-width-lg) mx-auto px-5 space-y-10">
            <AnimatedSection>
              <div className="text-center space-y-3">
                <Badge className="bg-background text-primary">
                  Real Results from Real Players
                </Badge>
                <h2 className="text-2xl md:text-4xl xl:text-5xl font-nunito font-bold tracking-wide">
                  What Players Are Achieving
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
              {achievements.map((ach) => (
                <AchievementCard key={ach.id} achievement={ach} />
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-20">
          <div className="max-w-(--max-width-lg) mx-auto px-5 space-y-10">
            <AnimatedSection>
              <div className="text-center space-y-3">
                <Badge className="bg-white text-primary">
                  Why Smart Spender Actually Works
                </Badge>
                <h2 className="text-2xl md:text-4xl xl:text-5xl font-nunito font-bold tracking-wide">
                  Game-Changing Features
                </h2>
                <p className="text-gray-500 text-sm md:text-lg">
                  Unlike boring financial apps, we make learning addictive through gamification,
                  real-world challenges, and instant rewards.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((item) => (
                <FeaturesCard key={item.id} feature={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="w-full py-20 bg-white">
          <div className="max-w-(--max-width-lg) mx-auto px-5 space-y-10">
            <AnimatedSection>
              <div className="text-center space-y-3">
                <Badge className="bg-background text-primary">
                  Money Tips & Insights
                </Badge>
                <h2 className="text-2xl md:text-4xl xl:text-5xl font-nunito font-bold tracking-wide">
                  Level Up Your Financial Knowledge
                </h2>
                <p className="text-gray-500 text-sm md:text-lg">
                  Quick reads, actionable tips, and insider secrets from financial experts
                </p>
              </div>
            </AnimatedSection>

            <BlogSection />

            <div className="text-center">
              <Link href="/blog">
                <Button variant="outline" className="text-primary hover:bg-primary/5 hover:scale-102 transition-transform duration-200 rounded-full">
                  <BookOpen className="mr-1 h-4 w-4" />
                  Read All Tips
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="download" className="w-full py-20 bg-green-50 relative overflow-hidden">
          <div className="max-w-(--max-width-lg) mx-auto px-5 space-y-10">
            <AnimatedSection>
              <div className="bg-primary px-10 py-20 rounded-[40px] space-y-5">
                <div className="space-y-4 text-center text-white">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Badge className="bg-background text-primary">
                      <Gift className="h-5 md:h-8 w-5 md:w-8 text-green-500 mr-2" /> Limited Time: Free Premium Access
                    </Badge>
                  </div>
                  <h2 className="text-3xl md:text-4xl xl:text-5xl font-nunito font-bold tracking-wide">
                    Ready to Save Money?
                  </h2>
                  <p className=" text-sm md:text-lg leading-relaxed">
                    Join 50,000+ players who've already transformed their financial lives.
                    Start your journey to financial freedom today - completely free!
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-4 min-[400px]:flex-row">
                  <Link href="/learn" >
                    <Button variant="outline" className="shadow-md px-8 py-4 rounded-full hover:scale-102 transition-transform duration-200">
                      <Gamepad2 className="mr-1 h-5 w-5" />
                      Start Playing Free
                    </Button>
                  </Link>
                  <Button variant="outline" className="shadow-md px-8 py-4 rounded-full hover:scale-102 transition-transform duration-200">
                    <PlayCircle className="mr-1 h-5 w-5" />
                    Watch Demo
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-5 text-xs text-white">
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
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  )
}
