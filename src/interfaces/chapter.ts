export interface Chapter {
    slug: string;
    title: string;
    description: string;
    icon: string
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
    duration: string
    lessons: Lesson[]
    color: string
    published_at: string;
}

export interface Lesson {
    id: string
    title: string
    type: "reading" | "video" | "interactive" | "audio"
    duration: string
    content: string
    keyPoints: string[]
    isCompleted: boolean
    quiz?: {
        question: string
        options: string[]
        correctAnswer: number
        explanation: string
    }
}