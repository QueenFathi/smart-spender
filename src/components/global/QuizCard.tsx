import { ArrowRight, CheckCircle, Clock, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

export default function QuizCard({ quiz }) {
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
}