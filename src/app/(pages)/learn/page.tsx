"use client"

import { useEffect, useState } from "react"
import { getAllChapters } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Play, Users, Brain, BarChart3, AlertCircle } from 'lucide-react'
import Navbar from "@/components/layout/Navbar"
import AnimatedText from "@/components/global/AnimatedText"
import AnimatedSection from "@/components/global/AnimatedSection"
import ChapterCard from "@/components/learn/ChapterCard"
import QuizCard from "@/components/global/QuizCard"
import ChapterCardSkeleton from "@/components/skeleton/ChapterCardSkeleton"
import { quizzes } from "@/lib/chapter-data"

interface Chapter {
        slug: string,
        title: string,
        description: string,
        icon: React.ElementType,
        difficulty: 'Beginner' | 'Intermediate' | 'Advanced',
        duration: string,
        color: string,
        lessonCount: number,
    }

export default function LearnPage() {
    const [allChapters, setChapter] = useState<Chapter[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchChapterData() {
            try {
                setLoading(true)
                const data = await getAllChapters()
                if (data) {
                    setChapter(data)
                } else {
                    setError("Chapter not found")
                }
            } catch (err) {
                setError("Failed to load chapter data")
            } finally {
                setLoading(false)
            }
        }

        fetchChapterData()
    }, [])

    // const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null)

    // const totalProgress = Math.round(
    //     chapters.reduce((acc, chapter) => acc + chapter.progress, 0) / chapters.length
    // )

    // const completedChapters = chapters.filter(c => c.isCompleted).length
    // const totalPoints = chapters.filter(c => c.isCompleted).reduce((acc, c) => acc + c.points, 0) +
    // chapters.filter(c => !c.isCompleted).reduce((acc, c) => acc + Math.round(c.points * (c.progress / 100)), 0)

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
            <Navbar />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <AnimatedText text="Your Learning Journey" className="text-3xl font-bold text-gray-900" />
                            <p className="text-gray-600 mt-1">Master financial skills through interactive lessons and quizzes</p>
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-bold text-green-500">0</div>
                            <div className="text-sm text-gray-600">Total Points</div>
                        </div>
                    </div>

                    <AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                            <Card className="border-green-200">
                                <CardContent className="p-4 text-center">
                                    <div className="text-2xl font-bold text-green-500 mb-1">0%</div>
                                    <div className="text-sm text-gray-600">Overall Progress</div>
                                </CardContent>
                            </Card>
                            <Card className="border-yellow-200">
                                <CardContent className="p-4 text-center">
                                    <div className="text-2xl font-bold text-yellow-500 mb-1">0/6</div>
                                    <div className="text-sm text-gray-600">Chapters Complete</div>
                                </CardContent>
                            </Card>
                            <Card className="border-blue-200">
                                <CardContent className="p-4 text-center">
                                    <div className="text-2xl font-bold text-blue-500 mb-1">47</div>
                                    <div className="text-sm text-gray-600">Lessons Completed</div>
                                </CardContent>
                            </Card>
                            <Card className="border-purple-200">
                                <CardContent className="p-4 text-center">
                                    <div className="text-2xl font-bold text-purple-500 mb-1">12</div>
                                    <div className="text-sm text-gray-600">Quizzes Passed</div>
                                </CardContent>
                            </Card>
                        </div>
                    </AnimatedSection>

                    <Progress value={0} className="h-3 mb-2" />
                    <div className="text-sm text-gray-600">Keep going! You're doing great 🎉</div>
                </div>

                <Tabs defaultValue="chapters" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                        <TabsTrigger value="chapters" className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            Chapters
                        </TabsTrigger>
                        <TabsTrigger value="quizzes" className="flex items-center gap-2">
                            <Brain className="h-4 w-4" />
                            Quizzes
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="chapters">
                        {loading ? <div>
                                        <ChapterCardSkeleton />
                                        <ChapterCardSkeleton />
                                        <ChapterCardSkeleton />
                                    </div>
                            : error ?<div className="text-center">
                                        <AlertCircle className="h-8 w-8 text-red-500 mx-auto mb-4" />
                                        <p className="text-gray-600">{error || "Chapter not found"}</p>
                                    </div> 
                            : <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {allChapters.map((chapter) => {
                                    return (<ChapterCard chapter={chapter} key={chapter.slug} />
                                    )
                                })}
                            </div>}
                    </TabsContent>

                    <TabsContent value="quizzes">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {quizzes.map((quiz, index) => {
                                return (
                                    <QuizCard quiz={quiz} key={index} />
                                )
                            })}
                        </div>
                    </TabsContent>
                </Tabs>
                <AnimatedSection>
                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        <Card className="border-green-200 hover:border-green-500 transition-colors cursor-pointer">
                            <CardContent className="p-6 text-center">
                                <Play className="h-12 w-12 text-green-500 mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">Take a Quiz</h3>
                                <p className="text-sm text-gray-600 mb-4">Test your knowledge with interactive quizzes</p>
                                <Button className="bg-green-500 hover:bg-green-600">Start Quiz</Button>
                            </CardContent>
                        </Card>

                        <Card className="border-yellow-200 hover:border-yellow-500 transition-colors cursor-pointer">
                            <CardContent className="p-6 text-center">
                                <BarChart3 className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">View Progress</h3>
                                <p className="text-sm text-gray-600 mb-4">Track your learning journey and achievements</p>
                                <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                                    View Stats
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-blue-200 hover:border-blue-500 transition-colors cursor-pointer">
                            <CardContent className="p-6 text-center">
                                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">Join Community</h3>
                                <p className="text-sm text-gray-600 mb-4">Connect with other learners and share tips</p>
                                <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                                    Join Now
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    )
}
