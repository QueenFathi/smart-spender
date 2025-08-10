export interface Chapter {
  id: string
  title: string
  description: string
  icon: any
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  lessons: number
  quizzes: number
  points: number
  isUnlocked: boolean
  isCompleted: boolean
  progress: number
  color: string
}

export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  category: string
}

export interface quizQuestions {
  id: number
  chapter: string
  category: string
  question: string
  options: string[]
  correctAnswer: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  hint: string
  points: number
  speedMode: boolean
  explanation: string
}