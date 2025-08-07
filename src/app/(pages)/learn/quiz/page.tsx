'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { PiggyBank, Zap, CheckCircle, XCircle, ArrowRight, ArrowLeft, Trophy, Star, Clock, Brain, Target, RotateCcw } from 'lucide-react'
import Link from "next/link"
import { sampleQuestions } from "@/lib/dummydata"

export default function QuizPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<string>("")
    const [showResult, setShowResult] = useState(false)
    const [score, setScore] = useState(0)
    const [answers, setAnswers] = useState<number[]>([])
    const [quizCompleted, setQuizCompleted] = useState(false)

    const handleAnswerSelect = (value: string) => {
        setSelectedAnswer(value)
    }

    const handleNext = () => {
        const answerIndex = parseInt(selectedAnswer)
        const newAnswers = [...answers]
        newAnswers[currentQuestion] = answerIndex
        setAnswers(newAnswers)

        if (answerIndex === sampleQuestions[currentQuestion].correctAnswer) {
            setScore(score + 1)
        }

        setShowResult(true)
    }

    const handleContinue = () => {
        if (currentQuestion < sampleQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setSelectedAnswer("")
            setShowResult(false)
        } else {
            setQuizCompleted(true)
        }
    }

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
            setSelectedAnswer(answers[currentQuestion - 1]?.toString() || "")
            setShowResult(false)
        }
    }

    const resetQuiz = () => {
        setCurrentQuestion(0)
        setSelectedAnswer("")
        setShowResult(false)
        setScore(0)
        setAnswers([])
        setQuizCompleted(false)
    }

    const progress = ((currentQuestion + 1) / sampleQuestions.length) * 100
    const currentQ = sampleQuestions[currentQuestion]

    if (quizCompleted) {
        const percentage = Math.round((score / sampleQuestions.length) * 100)
        const isExcellent = percentage >= 80
        const isGood = percentage >= 60

        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
                {/* Header */}
                <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/90 backdrop-blur-sm">
                    <Link href="/" className="flex items-center justify-center">
                        <div className="relative">
                            <PiggyBank className="h-8 w-8 text-green-500" />
                            <Zap className="h-4 w-4 text-yellow-500 absolute -top-1 -right-1" />
                        </div>
                        <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                            Smart Spender
                        </span>
                    </Link>
                </header>

                <div className="container mx-auto px-4 py-8 max-w-2xl">
                    <Card className="border-2 border-green-500 bg-gradient-to-br from-green-50 to-yellow-50">
                        <CardContent className="p-8 text-center">
                            <div className="mb-6">
                                {isExcellent ? (
                                    <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                                ) : isGood ? (
                                    <Star className="h-16 w-16 text-green-500 mx-auto mb-4" />
                                ) : (
                                    <Target className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                                )}

                                <h1 className="text-3xl font-bold mb-2">
                                    {isExcellent ? "Excellent Work! 🎉" : isGood ? "Good Job! 👏" : "Keep Learning! 📚"}
                                </h1>
                                <p className="text-gray-600">
                                    {isExcellent ? "You're a financial wizard!" : isGood ? "You're on the right track!" : "Practice makes perfect!"}
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-500">{score}</div>
                                    <div className="text-sm text-gray-600">Correct</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-500">{percentage}%</div>
                                    <div className="text-sm text-gray-600">Score</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-500">+{score * 50}</div>
                                    <div className="text-sm text-gray-600">Points</div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <Button
                                    onClick={resetQuiz}
                                    className="bg-green-500 hover:bg-green-600 text-white w-full"
                                >
                                    <RotateCcw className="mr-2 h-4 w-4" />
                                    Try Again
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-green-500 text-green-600 hover:bg-green-50 w-full"
                                    asChild
                                >
                                    <Link href="/learn">
                                        <Brain className="mr-2 h-4 w-4" />
                                        Continue Learning
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
            {/* Header */}
            <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/90 backdrop-blur-sm">
                <Link href="/" className="flex items-center justify-center">
                    <div className="relative">
                        <PiggyBank className="h-8 w-8 text-green-500" />
                        <Zap className="h-4 w-4 text-yellow-500 absolute -top-1 -right-1" />
                    </div>
                    <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                        Smart Spender
                    </span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link href="/learn" className="text-sm font-medium hover:text-green-500 transition-colors">
                        Learn
                    </Link>
                    <Link href="/quiz" className="text-sm font-medium text-green-500">
                        Quiz
                    </Link>
                </nav>
            </header>

            <div className="container mx-auto px-4 py-8 max-w-2xl">
                {/* Progress Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Financial Knowledge Quiz</h1>
                            <p className="text-gray-600">Test your understanding of key financial concepts</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                            Question {currentQuestion + 1} of {sampleQuestions.length}
                        </Badge>
                    </div>

                    <Progress value={progress} className="h-3 mb-2" />
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Progress: {Math.round(progress)}%</span>
                        <span>Score: {score}/{currentQuestion + (showResult ? 1 : 0)}</span>
                    </div>
                </div>

                {/* Question Card */}
                <Card className="mb-6">
                    <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                            <Badge variant={
                                currentQ.difficulty === 'Easy' ? 'secondary' :
                                    currentQ.difficulty === 'Medium' ? 'default' : 'destructive'
                            }>
                                {currentQ.difficulty}
                            </Badge>
                            <Badge variant="outline">{currentQ.category}</Badge>
                        </div>
                        <CardTitle className="text-xl leading-relaxed">{currentQ.question}</CardTitle>
                    </CardHeader>

                    <CardContent>
                        {!showResult ? (
                            <div className="space-y-4">
                                <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
                                    {currentQ.options.map((option, index) => (
                                        <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                            <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                                            <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                                                {option}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>

                                <div className="flex justify-between pt-4">
                                    <Button
                                        variant="outline"
                                        onClick={handlePrevious}
                                        disabled={currentQuestion === 0}
                                    >
                                        <ArrowLeft className="mr-2 h-4 w-4" />
                                        Previous
                                    </Button>
                                    <Button
                                        onClick={handleNext}
                                        disabled={!selectedAnswer}
                                        className="bg-green-500 hover:bg-green-600"
                                    >
                                        Submit Answer
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className={`p-4 rounded-lg flex items-start gap-3 ${parseInt(selectedAnswer) === currentQ.correctAnswer
                                        ? 'bg-green-50 border border-green-200'
                                        : 'bg-red-50 border border-red-200'
                                    }`}>
                                    {parseInt(selectedAnswer) === currentQ.correctAnswer ? (
                                        <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                                    ) : (
                                        <XCircle className="h-6 w-6 text-red-500 mt-0.5" />
                                    )}
                                    <div>
                                        <div className="font-semibold mb-2">
                                            {parseInt(selectedAnswer) === currentQ.correctAnswer ? 'Correct!' : 'Incorrect'}
                                        </div>
                                        <div className="text-sm text-gray-700">
                                            <strong>Correct answer:</strong> {currentQ.options[currentQ.correctAnswer]}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                    <div className="font-semibold text-blue-900 mb-2">Explanation:</div>
                                    <div className="text-sm text-blue-800">{currentQ.explanation}</div>
                                </div>

                                <div className="flex justify-between pt-4">
                                    <Button
                                        variant="outline"
                                        onClick={handlePrevious}
                                        disabled={currentQuestion === 0}
                                    >
                                        <ArrowLeft className="mr-2 h-4 w-4" />
                                        Previous
                                    </Button>
                                    <Button
                                        onClick={handleContinue}
                                        className="bg-green-500 hover:bg-green-600"
                                    >
                                        {currentQuestion < sampleQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                    <Card className="text-center border-green-200">
                        <CardContent className="p-4">
                            <Clock className="h-6 w-6 text-green-500 mx-auto mb-2" />
                            <div className="text-sm text-gray-600">Time</div>
                            <div className="font-semibold">5 min</div>
                        </CardContent>
                    </Card>
                    <Card className="text-center border-yellow-200">
                        <CardContent className="p-4">
                            <Star className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                            <div className="text-sm text-gray-600">Points</div>
                            <div className="font-semibold">+250</div>
                        </CardContent>
                    </Card>
                    <Card className="text-center border-blue-200">
                        <CardContent className="p-4">
                            <Brain className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                            <div className="text-sm text-gray-600">Level</div>
                            <div className="font-semibold">Beginner</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
