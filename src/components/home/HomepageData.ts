import {
    Calculator,
    PiggyBank,
    TrendingUp,
    CreditCard,
    Target,
    Brain,
    DollarSign,
    BarChart3,
    Lightbulb
} from "lucide-react";

export interface Achievement {
    id: number,
    color: string,
    targetNumber: number,
    symbol: string,
    text: string
}
export const achievements: Achievement[] = [
    {
        id: 1,
        color: "green",
        targetNumber: 1247,
        symbol: "$",
        text: "Average monthly savings increase",
    },
    {
        id: 2,
        color: "yellow",
        targetNumber: 127,
        symbol: "pts",
        text: "Average credit score boost",
    },
    {
        id: 3,
        color: "green",
        targetNumber: 89,
        symbol: "%",
        text: "Stick to their budget",
    },
    {
        id: 4,
        color: "yellow",
        targetNumber: 3.2,
        symbol: "x",
        text: "Fast debt payoff",
    },
]





export interface Features {
    id: number;
    title: string;
    description: string;
    gradient: string;
    borderColor: string;
    icon: React.ElementType;
    features: string[];
}

export const features: Features[] = [
    {
        id: 1,
        title: "Budget Like a Pro",
        description:
            "Turn budgeting from a chore into a game with our interactive challenges",
        gradient: "from-green-500 to-green-600",
        borderColor: "hover:border-green-500",
        icon: Calculator,
        features: [
            "Smart budget templates",
            "Expense tracking games",
            "Weekly budget battles",
        ],
    },
    {
        id: 2,
        title: "Savings Superpower",
        description:
            "Build your emergency fund and reach goals faster with our proven system",
        gradient: "from-yellow-500 to-yellow-600",
        borderColor: "hover:border-yellow-500",
        icon: PiggyBank,
        features: [
            "Automated savings challenges",
            "Goal visualization tools",
            "Compound interest simulator",
        ],
    },
    {
        id: 3,
        title: "Investment Mastery",
        description:
            "Learn investing without risking real money through our advanced simulator",
        gradient: "from-green-600 to-green-700",
        borderColor: "hover:border-green-500",
        icon: TrendingUp,
        features: [
            "Risk-free trading simulator",
            "Portfolio building games",
            "Market trend challenges",
        ],
    },
    {
        id: 4,
        title: "Credit Score Booster",
        description:
            "Understand and improve your credit through interactive lessons and tracking",
        gradient: "from-yellow-600 to-yellow-700",
        borderColor: "hover:border-yellow-500",
        icon: CreditCard,
        features: [
            "Credit score simulator",
            "Debt elimination strategies",
            "Credit optimization tips",
        ],
    },
    {
        id: 5,
        title: "Smart Shopping",
        description:
            "Master the art of conscious spending and never overpay again",
        gradient: "from-green-500 to-green-600",
        borderColor: "hover:border-green-500",
        icon: Target,
        features: [
            "Price comparison tools",
            "Impulse control training",
            "Value assessment games",
        ],
    },
    {
        id: 6,
        title: "Gamified Learning",
        description:
            "Earn points, unlock achievements, and compete with friends",
        gradient: "from-yellow-500 to-yellow-600",
        borderColor: "hover:border-yellow-500",
        icon: Brain,
        features: [
            "Daily financial quests",
            "Achievement system",
            "Social leaderboards",
        ],
    },
];





export interface Blog {
    id: number;
    title: string;
    description: string;
    readTime: string;
    date: string;
    category: string;
    gradient: string;
    icon: React.ElementType;
}

export const blog: Blog[] = [
    {
        id: 1,
        title: "The 50/30/20 Rule That Actually Works",
        description:
            "Discover why this simple budgeting method has helped millions take control of their finances...",
        readTime: "3 min read",
        date: "Dec 15, 2024",
        category: "Budgeting",
        gradient: "from-green-500 to-green-600",
        icon: DollarSign,
    },
    {
        id: 2,
        title: "Start Investing with Just $25",
        description:
            "Think you need thousands to start investing? Think again. Here's how to begin your wealth journey...",
        readTime: "5 min read",
        date: "Dec 12, 2024",
        category: "Investing",
        gradient: "from-yellow-500 to-yellow-600",
        icon: BarChart3,
    },
    {
        id: 3,
        title: "5 Credit Score Hacks That Work",
        description:
            "Boost your credit score by 100+ points in 90 days with these proven strategies...",
        readTime: "4 min read",
        date: "Dec 10, 2024",
        category: "Credit",
        gradient: "from-green-600 to-yellow-500",
        icon: Lightbulb,
    },
];
