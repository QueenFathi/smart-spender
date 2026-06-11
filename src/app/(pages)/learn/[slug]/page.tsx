"use client"

import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
    AlertCircle,
    ArrowLeft,
    ArrowRight,
    BookOpen,
    Brain,
    Calculator,
    CheckCircle,
    Clock,
    CreditCard,
    FileText,
    Headphones,
    Lightbulb,
    PiggyBank,
    Play,
    Star,
    Target,
    TrendingUp,
    Video
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Chapter } from "@/interfaces/chapter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import { Progress } from "@/components/ui/progress";
import { SaveProgressModal } from "@/components/global/SaveProgressModal";
import ChapterPageSkeleton from "@/components/skeleton/ChapterPageSkeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getChapterData } from "@/lib/api";

interface LessonPageProps {
    params: {
        slug: string;
    };
}

export default function Page() {
    const params = useParams()
    const slug = params.slug as string
    const [chapter, setChapter] = useState<Chapter | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
    const [showQuiz, setShowQuiz] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [showQuizResult, setShowQuizResult] = useState(false)
    const [showModal, setShowModal] = useState(false);

    const saveProgress = async () => {
        await fetch("/api/progress", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ slug: params.slug }),
        });
    };

    useEffect(() => {
        async function fetchChapterData() {
            try {
                setLoading(true)
                const data = await getChapterData(slug)
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
    }, [slug])

    if (loading) {
        return (
            <ChapterPageSkeleton />
        )
    }

    if (error || !chapter) {
        return (
            <div className="min-h-screen bg-linear-to-br from-green-50 via-yellow-50 to-green-100 flex items-center justify-center">
                <div className="text-center">
                    <AlertCircle className="h-8 w-8 text-red-500 mx-auto mb-4" />
                    <p className="text-gray-600">{error || "Chapter not found"}</p>
                    <Button asChild className="mt-4">
                        <Link href="/learn">Back to Learn</Link>
                    </Button>
                </div>
            </div>
        )
    }

    const getIconComponent = (iconName: string) => {
        const icons: Record<string, any> = {
            Calculator,
            PiggyBank,
            CreditCard,
            TrendingUp,
            Brain,
            Target,
        }
        return icons[iconName] || Calculator
    }

    const IconComponent = getIconComponent(chapter.icon)
    const currentLesson = chapter.lessons[currentLessonIndex]
    const progress = ((currentLessonIndex) / chapter.lessons.length) * 100
    const completedLessons = chapter.lessons.filter((l) => l.isCompleted).length

    const handleNextLesson = () => {
        if (currentLessonIndex < chapter.lessons.length - 1) {
            setCurrentLessonIndex(currentLessonIndex + 1)
            setShowQuiz(false)
            setShowQuizResult(false)
            setSelectedAnswer(null)
        }
    }

    const handlePreviousLesson = () => {
        if (currentLessonIndex > 0) {
            setCurrentLessonIndex(currentLessonIndex - 1)
            setShowQuiz(false)
            setShowQuizResult(false)
            setSelectedAnswer(null)
        }
    }

    const handleQuizSubmit = () => {
        setShowQuizResult(true)
    }

    const handleCompleteLesson = () => {
        chapter.lessons[currentLessonIndex].isCompleted = true

        if (currentLesson.quiz && !showQuizResult) {
            setShowQuiz(true)
        } else {
            handleNextLesson()
            const lessonsElement = document.getElementById('lessons');
            if (lessonsElement) {
                lessonsElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setShowModal(true)
    }



    const getContentTypeIcon = (type: string) => {
        switch (type) {
            case "video":
                return <Video className="h-4 w-4" />
            case "audio":
                return <Headphones className="h-4 w-4" />
            case "interactive":
                return <Target className="h-4 w-4" />
            default:
                return <FileText className="h-4 w-4" />
        }
    }

    return (
        <main>
            <div className="min-h-screen bg-linear-to-br from-background via-white to-background">
                <Navbar />
                <div className="max-w-(--max-width-lg) mx-auto px-5 py-10">
                    <div className="mb-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className={`h-12 w-12 rounded-xl flex items-center justify-center bg-primary text-white`}>
                                <IconComponent className="h-6 w-6" />
                            </div>
                            <div>
                                <h1 className="text-xl md:text-3xl font-bold">{chapter.title}</h1>
                                <p className="text-sm md:text-lg text-gray-500">{chapter.description}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                            <Badge>{chapter.difficulty}</Badge>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                                <Clock className="h-4 w-4" />
                                <span>{chapter.duration}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                                <BookOpen className="h-4 w-4" />
                                <span>{chapter.lessons.length} lessons</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Progress: {completedLessons}/{chapter.lessons.length} lessons completed</span>
                                <span>{Math.round(progress)}%</span>
                            </div>
                            <Progress value={progress} className="h-2 bg-primary/10" />
                        </div>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg" id="lessons">Lessons</h3>
                            <div className="space-y-2">
                                {chapter.lessons.map((lesson, index) => (
                                    <Card
                                        key={lesson.id}
                                        className={`cursor-pointer transition-all ${index === currentLessonIndex
                                            ? 'border-primary bg-background'
                                            : lesson.isCompleted
                                                ? 'border-green-200'
                                                : 'border-gray-200'
                                            }`}
                                        onClick={() => setCurrentLessonIndex(index)}
                                    >
                                        <CardContent className="p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-2">
                                                    {getContentTypeIcon(lesson.type)}
                                                    <span className="text-sm font-medium">{lesson.title}</span>
                                                </div>
                                                {lesson.isCompleted && <CheckCircle className="h-4 w-4 text-primary" />}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <Clock className="h-3 w-3" />
                                                <span>{lesson.duration}</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            {getContentTypeIcon(currentLesson.type)}
                                            <div>
                                                <CardTitle className="text-xl">{chapter.title}</CardTitle>
                                                <CardDescription className="flex items-center gap-2 mt-1">
                                                    <Clock className="h-4 w-4" />
                                                    {chapter.duration}
                                                </CardDescription>
                                            </div>
                                        </div>
                                        {currentLesson.isCompleted && (
                                            <Badge className="bg-primary">
                                                <CheckCircle className="h-3 w-3 mr-1" />
                                                Completed
                                            </Badge>
                                        )}
                                    </div>
                                </CardHeader>

                                <CardContent className="prose prose-gray max-w-none">
                                    <div className="markdown">
                                        <Markdown>
                                            {currentLesson.content}
                                        </Markdown>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-secondary/50 bg-secondary/10">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-lg">
                                        <Lightbulb className="h-5 w-5 text-secondary" />
                                        Key Takeaways
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {currentLesson.keyPoints.map((point, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <Star className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                                                <span className="text-sm">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            {currentLesson.quiz && showQuiz && (
                                <Card className="border-primary/50 bg-background">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <AlertCircle className="h-5 w-5 text-primary" />
                                            Quick Check
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {!showQuizResult ? (
                                            <div className="space-y-4">
                                                <p className="font-medium">{currentLesson.quiz.question}</p>
                                                <div className="space-y-2">
                                                    {currentLesson.quiz.options.map((option, index) => (
                                                        <label key={index} className="flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-primary/20">
                                                            <input
                                                                type="radio"
                                                                name="quiz-answer"
                                                                value={index}
                                                                checked={selectedAnswer === index}
                                                                onChange={() => setSelectedAnswer(index)}
                                                                className="text-primary"
                                                            />
                                                            <span>{option}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                                <Button
                                                    onClick={handleQuizSubmit}
                                                    disabled={selectedAnswer === null}
                                                    className="bg-primary hover:bg-green-600"
                                                >
                                                    Submit Answer
                                                </Button>
                                            </div>
                                        ) : (
                                            <div className="space-y-4">
                                                <div className={`p-4 rounded-lg ${selectedAnswer === currentLesson.quiz.correctAnswer
                                                    ? 'bg-green-100 border border-green-300'
                                                    : 'bg-red-100 border border-red-300'
                                                    }`}>
                                                    <p className="font-medium mb-2">
                                                        {selectedAnswer === currentLesson.quiz.correctAnswer ? '✅ Correct!' : '❌ Incorrect'}
                                                    </p>
                                                    <p className="text-sm">{currentLesson.quiz.explanation}</p>
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            )}

                            <div className="flex justify-between items-center pt-6">
                                <Button
                                    variant="outline"
                                    onClick={handlePreviousLesson}
                                    disabled={currentLessonIndex === 0}
                                >
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Previous
                                </Button>

                                <div className="text-sm text-gray-600">
                                    Lesson {currentLessonIndex + 1} of {chapter.lessons.length}
                                </div>

                                {currentLessonIndex === chapter.lessons.length - 1 ? (
                                    <Button className="bg-primary hover:bg-green-600" asChild>
                                        <Link href="/learn/quiz">
                                            Take Chapter Quiz
                                            <Play className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={handleCompleteLesson}
                                        // disabled={currentLesson.quiz && !showQuizResult}
                                        className="bg-primary hover:bg-green-600"
                                    >
                                        {currentLesson.quiz && !showQuizResult ? 'Complete Lesson' : 'Next Lesson'}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                )}
                            </div>
                        </div>
                        <SaveProgressModal
                            open={showModal}
                            onClose={() => setShowModal(false)}
                            chapterSlug={slug}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

