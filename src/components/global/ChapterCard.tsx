import { ArrowRight, CheckCircle, Clock, Lock, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function ChapterCard({ chapter }) {
    const IconComponent = chapter.icon
    const isLocked = !chapter.isUnlocked

    return (
        <Link href={`/learn/${chapter.slug}`}>
        <Card
            key={chapter.id}
            className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${isLocked ? 'opacity-60' : ''
                } ${chapter.isCompleted ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
            // onClick={() => !isLocked && setSelectedChapter(chapter)}
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
        </Link>
    )
}