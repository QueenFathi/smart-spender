import { Chapter, Question } from "./types"
import { Calculator, PiggyBank, CreditCard, TrendingUp, Brain, Target } from "lucide-react"

export const chapters: Chapter[] = [
  {
    id: 'budgeting-basics',
    title: 'Budgeting Basics',
    description: 'Master the fundamentals of creating and sticking to a budget',
    icon: Calculator,
    difficulty: 'Beginner',
    duration: '45 min',
    lessons: 8,
    quizzes: 3,
    points: 250,
    isUnlocked: true,
    isCompleted: true,
    progress: 100,
    color: 'green'
  },
  {
    id: 'saving-strategies',
    title: 'Saving Strategies',
    description: 'Build emergency funds and reach your financial goals faster',
    icon: PiggyBank,
    difficulty: 'Beginner',
    duration: '35 min',
    lessons: 6,
    quizzes: 2,
    points: 200,
    isUnlocked: true,
    isCompleted: false,
    progress: 60,
    color: 'yellow'
  },
  {
    id: 'debt-management',
    title: 'Debt Management',
    description: 'Eliminate debt and improve your credit score effectively',
    icon: CreditCard,
    difficulty: 'Intermediate',
    duration: '55 min',
    lessons: 10,
    quizzes: 4,
    points: 350,
    isUnlocked: true,
    isCompleted: false,
    progress: 25,
    color: 'red'
  },
  {
    id: 'investment-fundamentals',
    title: 'Investment Fundamentals',
    description: 'Start building wealth through smart investing strategies',
    icon: TrendingUp,
    difficulty: 'Intermediate',
    duration: '65 min',
    lessons: 12,
    quizzes: 5,
    points: 400,
    isUnlocked: false,
    isCompleted: false,
    progress: 0,
    color: 'blue'
  },
  {
    id: 'advanced-strategies',
    title: 'Advanced Strategies',
    description: 'Master complex financial concepts and optimization techniques',
    icon: Brain,
    difficulty: 'Advanced',
    duration: '80 min',
    lessons: 15,
    quizzes: 6,
    points: 500,
    isUnlocked: false,
    isCompleted: false,
    progress: 0,
    color: 'purple'
  },
  {
    id: 'financial-planning',
    title: 'Financial Planning',
    description: 'Create comprehensive long-term financial plans and goals',
    icon: Target,
    difficulty: 'Advanced',
    duration: '70 min',
    lessons: 13,
    quizzes: 5,
    points: 450,
    isUnlocked: false,
    isCompleted: false,
    progress: 0,
    color: 'indigo'
  }
]

export const quizzes = [
  { 
    id: 'budgeting-quiz',
    title: 'Budgeting Basics Quiz', 
    description: 'Test your knowledge of budgeting fundamentals', 
    icon: Calculator, 
    questions: 10,
    duration: '8 min',
    difficulty: 'Beginner',
    points: 100,
    isCompleted: true,
    score: 85,
    color: 'green'
  },
  { 
    id: 'saving-quiz',
    title: 'Smart Saving Quiz', 
    description: 'Challenge yourself on saving strategies', 
    icon: PiggyBank, 
    questions: 8,
    duration: '6 min',
    difficulty: 'Beginner',
    points: 80,
    isCompleted: true,
    score: 92,
    color: 'yellow'
  },
  { 
    id: 'credit-quiz',
    title: 'Credit Score Mastery', 
    description: 'Master credit and debt management concepts', 
    icon: CreditCard, 
    questions: 12,
    duration: '10 min',
    difficulty: 'Intermediate',
    points: 120,
    isCompleted: false,
    score: 0,
    color: 'red'
  },
  { 
    id: 'investing-quiz',
    title: 'Investment Fundamentals', 
    description: 'Test your investing knowledge and strategies', 
    icon: TrendingUp, 
    questions: 15,
    duration: '12 min',
    difficulty: 'Intermediate',
    points: 150,
    isCompleted: false,
    score: 0,
    color: 'blue'
  },
  { 
    id: 'advanced-quiz',
    title: 'Advanced Finance Quiz', 
    description: 'Challenge for financial experts', 
    icon: Brain, 
    questions: 20,
    duration: '15 min',
    difficulty: 'Advanced',
    points: 200,
    isCompleted: false,
    score: 0,
    color: 'purple'
  },
  { 
    id: 'planning-quiz',
    title: 'Financial Planning Quiz', 
    description: 'Comprehensive financial planning assessment', 
    icon: Target, 
    questions: 18,
    duration: '14 min',
    difficulty: 'Advanced',
    points: 180,
    isCompleted: false,
    score: 0,
    color: 'indigo'
  }
]

export const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "What is the recommended percentage of income to save according to the 50/30/20 rule?",
    options: ["10%", "15%", "20%", "25%"],
    correctAnswer: 2,
    explanation: "The 50/30/20 rule suggests saving 20% of your after-tax income. This includes both emergency savings and long-term savings goals.",
    difficulty: 'Easy',
    category: 'Budgeting'
  },
  {
    id: 2,
    question: "How many months of expenses should you ideally have in your emergency fund?",
    options: ["1-2 months", "3-6 months", "6-12 months", "12+ months"],
    correctAnswer: 1,
    explanation: "Financial experts recommend having 3-6 months of living expenses in your emergency fund to cover unexpected costs like job loss or medical bills.",
    difficulty: 'Easy',
    category: 'Saving'
  },
  {
    id: 3,
    question: "What factor has the biggest impact on your credit score?",
    options: ["Length of credit history", "Payment history", "Credit utilization", "Types of credit"],
    correctAnswer: 1,
    explanation: "Payment history accounts for 35% of your credit score, making it the most important factor. Always pay at least the minimum amount on time.",
    difficulty: 'Medium',
    category: 'Credit'
  },
  {
    id: 4,
    question: "What is compound interest?",
    options: [
      "Interest paid only on the principal amount",
      "Interest paid on both principal and previously earned interest",
      "A type of loan interest",
      "Interest that decreases over time"
    ],
    correctAnswer: 1,
    explanation: "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It's often called 'interest on interest' and is key to building wealth.",
    difficulty: 'Medium',
    category: 'Investing'
  },
  {
    id: 5,
    question: "Which investment typically offers the highest potential returns over the long term?",
    options: ["Savings accounts", "Bonds", "Stocks", "CDs (Certificates of Deposit)"],
    correctAnswer: 2,
    explanation: "Historically, stocks have provided the highest average returns over long periods (10+ years), though they also come with higher risk and volatility.",
    difficulty: 'Hard',
    category: 'Investing'
  }
]