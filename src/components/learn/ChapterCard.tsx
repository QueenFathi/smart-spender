import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ArrowRight, Brain, Calculator, Clock, CreditCard, PiggyBank, Star, Target, TrendingUp } from "lucide-react";
import { Progress } from "../ui/progress";

interface Props {
    chapter: {
        slug: string,
        title: string,
        description: string,
        icon: any,
        difficulty: 'Beginner' | 'Intermediate' | 'Advanced',
        duration: string,
        color: string,
        lessonCount: number,
    };
}

const ChapterCard: React.FC<Props> = ({ chapter }) => {
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

    return (
        <Link href={`/learn/${chapter.slug}`}>
            <Card
                key={chapter.slug}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
                <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                        <div className={`h-12 w-12 rounded-lg flex items-center justify-center bg-primary text-white group-hover:scale-110 transition-transform`}>
                            <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <Badge className={`${
                            chapter.difficulty === 'Beginner' ? 'bg-primary/20' :
                                chapter.difficulty === 'Intermediate' ? 'bg-primary/50' : 'bg-primary/80'
                        } text-xs text-black`}>
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
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{chapter.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-yellow-500" />
                                <span>00 pts</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>{chapter.lessonCount} lessons</span>
                            <span>00 quizzes</span>
                        </div>
                        <Progress value={1} className="h-2 bg-primary/10" />
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">{0}% complete</span>
                            <Button size="sm">
                                {/* {chapter.isCompleted ? 'Review' : chapter.progress > 0 ? 'Continue' : 'Start'} */}
                                <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}


export default ChapterCard