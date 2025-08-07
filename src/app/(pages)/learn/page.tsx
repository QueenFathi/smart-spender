'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Play, CheckCircle, Lock, Star, Clock, Users, Brain, ArrowRight, BarChart3 } from 'lucide-react'
import Link from "next/link"
import Navbar from "@/components/layout/Navbar"
import AnimatedText from "@/components/global/AnimatedText"
import AnimatedSection from "@/components/global/AnimatedSection"
import { chapters, quizzes } from "@/lib/dummydata"
import { Chapter } from "@/lib/types"

export default function LearnPage() {
    const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null)

    const totalProgress = Math.round(
        chapters.reduce((acc, chapter) => acc + chapter.progress, 0) / chapters.length
    )

    const completedChapters = chapters.filter(c => c.isCompleted).length
    const totalPoints = chapters.filter(c => c.isCompleted).reduce((acc, c) => acc + c.points, 0) +
        chapters.filter(c => !c.isCompleted).reduce((acc, c) => acc + Math.round(c.points * (c.progress / 100)), 0)

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
                            <div className="text-2xl font-bold text-green-500">{totalPoints}</div>
                            <div className="text-sm text-gray-600">Total Points</div>
                        </div>
                    </div>

                    <AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                            <Card className="border-green-200">
                                <CardContent className="p-4 text-center">
                                    <div className="text-2xl font-bold text-green-500 mb-1">{totalProgress}%</div>
                                    <div className="text-sm text-gray-600">Overall Progress</div>
                                </CardContent>
                            </Card>
                            <Card className="border-yellow-200">
                                <CardContent className="p-4 text-center">
                                    <div className="text-2xl font-bold text-yellow-500 mb-1">{completedChapters}/6</div>
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

                    <Progress value={totalProgress} className="h-3 mb-2" />
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
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {chapters.map((chapter) => {
                                const IconComponent = chapter.icon
                                const isLocked = !chapter.isUnlocked

                                return (
                                    <Card
                                        key={chapter.id}
                                        className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${isLocked ? 'opacity-60' : ''
                                            } ${chapter.isCompleted ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                                        onClick={() => !isLocked && setSelectedChapter(chapter)}
                                    >
                                        <CardHeader className="pb-3">
                                            <div className="flex items-start justify-between">
                                                <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${chapter.color === 'green' ? 'bg-green-500' :
                                                    chapter.color === 'yellow' ? 'bg-yellow-500' :
                                                        chapter.color === 'red' ? 'bg-red-500' :
                                                            chapter.color === 'blue' ? 'bg-blue-500' :
                                                                chapter.color === 'purple' ? 'bg-purple-500' :
                                                                    'bg-indigo-500'
                                                    } text-white group-hover:scale-110 transition-transform`}>
                                                    {isLocked ? <Lock className="h-6 w-6" /> : <IconComponent className="h-6 w-6" />}
                                                </div>
                                                <div className="flex flex-col items-end gap-1">
                                                    {chapter.isCompleted && <CheckCircle className="h-5 w-5 text-green-500" />}
                                                    <Badge variant={
                                                        chapter.difficulty === 'Beginner' ? 'secondary' :
                                                            chapter.difficulty === 'Intermediate' ? 'default' : 'destructive'
                                                    } className="text-xs">
                                                        {chapter.difficulty}
                                                    </Badge>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <CardTitle className="text-lg">{chapter.title}</CardTitle>
                                                <CardDescription className="text-sm">{chapter.description}</CardDescription>
                                            </div>
                                        </CardHeader>

                                        <CardContent className="pt-0">
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between text-sm text-gray-600">
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="h-4 w-4" />
                                                        <span>{chapter.duration}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Star className="h-4 w-4 text-yellow-500" />
                                                        <span>{chapter.points} pts</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between text-sm text-gray-600">
                                                    <span>{chapter.lessons} lessons</span>
                                                    <span>{chapter.quizzes} quizzes</span>
                                                </div>

                                                {!isLocked && (
                                                    <>
                                                        <Progress value={chapter.progress} className="h-2" />
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm text-gray-600">{chapter.progress}% complete</span>
                                                            <Button
                                                                size="sm"
                                                                className={`${chapter.isCompleted ? 'bg-green-500 hover:bg-green-600' :
                                                                    chapter.progress > 0 ? 'bg-yellow-500 hover:bg-yellow-600' :
                                                                        'bg-blue-500 hover:bg-blue-600'
                                                                    } text-white`}
                                                            >
                                                                {chapter.isCompleted ? 'Review' : chapter.progress > 0 ? 'Continue' : 'Start'}
                                                                <ArrowRight className="ml-1 h-4 w-4" />
                                                            </Button>
                                                        </div>
                                                    </>
                                                )}

                                                {isLocked && (
                                                    <div className="text-center py-2">
                                                        <p className="text-sm text-gray-500">Complete previous chapters to unlock</p>
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </TabsContent>

                    <TabsContent value="quizzes">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {quizzes.map((quiz) => {
                                const IconComponent = quiz.icon
                                return (
                                    <Card key={quiz.id} className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${quiz.isCompleted ? 'border-green-500 bg-green-50' : 'border-gray-200'
                                        }`}>
                                        <CardHeader className="pb-3">
                                            <div className="flex items-start justify-between">
                                                <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${quiz.color === 'green' ? 'bg-green-500' :
                                                    quiz.color === 'yellow' ? 'bg-yellow-500' :
                                                        quiz.color === 'red' ? 'bg-red-500' :
                                                            quiz.color === 'blue' ? 'bg-blue-500' :
                                                                quiz.color === 'purple' ? 'bg-purple-500' :
                                                                    'bg-indigo-500'
                                                    } text-white group-hover:scale-110 transition-transform`}>
                                                    <IconComponent className="h-6 w-6" />
                                                </div>
                                                <div className="flex flex-col items-end gap-1">
                                                    {quiz.isCompleted && <CheckCircle className="h-5 w-5 text-green-500" />}
                                                    <Badge variant={
                                                        quiz.difficulty === 'Beginner' ? 'secondary' :
                                                            quiz.difficulty === 'Intermediate' ? 'default' : 'destructive'
                                                    } className="text-xs">
                                                        {quiz.difficulty}
                                                    </Badge>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <CardTitle className="text-lg">{quiz.title}</CardTitle>
                                                <CardDescription className="text-sm">{quiz.description}</CardDescription>
                                            </div>
                                        </CardHeader>

                                        <CardContent className="pt-0">
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between text-sm text-gray-600">
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="h-4 w-4" />
                                                        <span>{quiz.duration}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Star className="h-4 w-4 text-yellow-500" />
                                                        <span>{quiz.points} pts</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between text-sm text-gray-600">
                                                    <span>{quiz.questions} questions</span>
                                                    {quiz.isCompleted && <span className="text-green-600 font-medium">Score: {quiz.score}%</span>}
                                                </div>

                                                <div className="flex items-center justify-between pt-2">
                                                    {quiz.isCompleted ? (
                                                        <Badge className="bg-green-500 hover:bg-green-500 text-white">
                                                            Completed ✓
                                                        </Badge>
                                                    ) : (
                                                        <Badge variant="outline">
                                                            Not Started
                                                        </Badge>
                                                    )}
                                                    <Button
                                                        size="sm"
                                                        className={`${quiz.isCompleted ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
                                                            } text-white`}
                                                        asChild
                                                    >
                                                        <Link href="/quiz">
                                                            {quiz.isCompleted ? 'Retake' : 'Start Quiz'}
                                                            <ArrowRight className="ml-1 h-4 w-4" />
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
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
