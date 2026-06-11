import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function QuizCard({ quiz }) {
    const IconComponent = quiz.icon
    return (
        <Card key={quiz.id} className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${quiz.isCompleted ? 'border-primary bg-background' : 'border-gray-200'
            }`}>
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary text-white group-hover:scale-110 transition-transform">
                        <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        {quiz.isCompleted && <CheckCircle className="h-5 w-5 text-primary" />}
                        <Badge className={`${
                            quiz.difficulty === 'Beginner' ? 'bg-primary/20' :
                                quiz.difficulty === 'Intermediate' ? 'bg-primary/50' : 'bg-primary/80'
                        } text-xs text-black`}>
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
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{quiz.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-secondary" />
                            <span>{quiz.points} pts</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{quiz.questions} questions</span>
                        {quiz.isCompleted && <span className="text-primary font-medium">Score: {quiz.score}%</span>}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <Badge variant={`${quiz.isCompleted ? "default" : "outline"}`}>
                            {quiz.isCompleted ? "Completed ✓" : "Not Started"}
                        </Badge>
                        <Button
                            size="sm"
                            variant={`${quiz.isCompleted ? "default" : "outline"}`}
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