import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Target, TrendingUp, CreditCard, PiggyBank, Calculator, Users, PlayCircle, CheckCircle, Star, Zap, Trophy, Gamepad2, BookOpen, Shield, Rocket, Gift } from 'lucide-react'
import Image from "next/image"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Counter from "@/components/global/Counter"
import AnimatedText from "@/components/global/AnimatedText"
import AnimatedSection from "@/components/global/AnimatedSection"
import BlogSection from "@/components/home/BlogSection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">

      <Navbar />

      <main className="flex-1">
        <section className="w-full pb-12 md:pb-24 lg:pb-32 pt-28 md:pt-40 lg:pt-52 relative overflow-hidden">
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

                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:scale-105 transition-transform duration-300">
                    <Gamepad2 className="mr-2 h-5 w-5" />
                    Start Playing Free
                  </Button>
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
              <Card className="text-center border-2 border-green-100 hover:border-green-500 transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-green-500 mb-2 flex justify-center items-center">$<Counter targetNumber={1247} duration={1000} /></div>
                  <p className="text-sm text-gray-600">Average monthly savings increase</p>
                </CardContent>
              </Card>
              <Card className="text-center border-2 border-yellow-100 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-yellow-500 mb-2 flex justify-center items-center"><Counter targetNumber={127} duration={1000} />pts</div>
                  <p className="text-sm text-gray-600">Average credit score boost</p>
                </CardContent>
              </Card>
              <Card className="text-center border-2 border-green-100 hover:border-green-500 transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-green-500 mb-2 flex justify-center items-center"><Counter targetNumber={89} duration={1000} />%</div>
                  <p className="text-sm text-gray-600">Stick to their budget</p>
                </CardContent>
              </Card>
              <Card className="text-center border-2 border-yellow-100 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">3.2x</div>
                  <p className="text-sm text-gray-600">Faster debt payoff</p>
                </CardContent>
              </Card>
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
              <AnimatedSection>
                <Card className="group border-2 border-transparent hover:border-green-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Calculator className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">Budget Like a Pro</CardTitle>
                    <CardDescription>
                      Turn budgeting from a chore into a game with our interactive challenges
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        Smart budget templates
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        Expense tracking games
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        Weekly budget battles
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection>
                <Card className="group border-2 border-transparent hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <PiggyBank className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">Savings Superpower</CardTitle>
                    <CardDescription>
                      Build your emergency fund and reach goals faster with our proven system
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-yellow-500" />
                        </div>
                        Automated savings challenges
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-yellow-500" />
                        </div>
                        Goal visualization tools
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-yellow-500" />
                        </div>
                        Compound interest simulator
                      </li>
                    </ul>
                  </CardContent>
                </Card></AnimatedSection>

              <AnimatedSection>
                <Card className="group border-2 border-transparent hover:border-green-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">Investment Mastery</CardTitle>
                    <CardDescription>
                      Learn investing without risking real money through our advanced simulator
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        Risk-free trading simulator
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        Portfolio building games
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        Market trend challenges
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection>
                <Card className="group border-2 border-transparent hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CreditCard className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">Credit Score Booster</CardTitle>
                    <CardDescription>
                      Understand and improve your credit through interactive lessons and tracking
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-yellow-500" />
                        </div>
                        Credit score simulator
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-yellow-500" />
                        </div>
                        Debt elimination strategies
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-yellow-500" />
                        </div>
                        Credit optimization tips
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection>
                <Card className="group border-2 border-transparent hover:border-green-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">Smart Shopping</CardTitle>
                    <CardDescription>
                      Master the art of conscious spending and never overpay again
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        Price comparison tools
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        Impulse control training
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        Value assessment games
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection>
                <Card className="group border-2 border-transparent hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">Gamified Learning</CardTitle>
                    <CardDescription>
                      Earn points, unlock achievements, and compete with friends
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-yellow-500" />
                        </div>
                        Daily financial quests
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-yellow-500" />
                        </div>
                        Achievement system
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-yellow-500" />
                        </div>
                        Social leaderboards
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
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
              <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                <BookOpen className="mr-2 h-4 w-4" />
                Read All Tips
              </Button>
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
                    <Badge className="bg-yellow-500 text-yellow-900 hover:bg-yellow-500 text-lg px-4 py-1">
                      Limited Time: Free Premium Access
                    </Badge>
                  </div>
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                    Ready to Win at Money?
                  </h2>
                  <p className="max-w-[600px] text-green-100 md:text-xl leading-relaxed">
                    Join 50,000+ players who've already transformed their financial lives.
                    Start your journey to financial freedom today - completely free!
                  </p>
                </div>

                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 shadow-xl text-lg px-8 py-4 hover:scale-105 transition-transform duration-300">
                    <Gamepad2 className="mr-2 h-6 w-6" />
                    Start Playing Free
                  </Button>
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 shadow-xl text-lg px-8 py-4 hover:scale-105 transition-transform duration-300">
                    <PlayCircle className="mr-2 h-6 w-6" />
                    Watch Demo
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm text-green-100 mt-4">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>100% Free to start</span>
                  </div>
                  <div className="flex items-center gap-1">
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

      <Footer />
    </div>
  )
}
