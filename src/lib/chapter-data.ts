import { Question } from "./types"
import { Chapter } from "@/interfaces/chapter"
import { Calculator, PiggyBank, CreditCard, TrendingUp, Brain, Target } from "lucide-react"

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

export const quizQuestions = [
    {
      id: 1,
      chapter: "Budgeting",
      category: 'Budgeting',
      question: "What is the recommended percentage of income to save according to the 50/30/20 rule?",
      options: ["10%", "15%", "20%", "25%"],
      correctAnswer: 2,
      difficulty: "Easy",
      hint: "This is the hint",
      points: 10,
      speedMode: false,
      explanation: "The 50/30/20 rule suggests saving 20% of your after-tax income. This includes both emergency savings and long-term savings goals.",
    },
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

export const chaptersData: Record<string, Chapter> = {
  "budgeting-basics": {
    slug: "budgeting-basics",
    title: "Budgeting Basics",
    description: "Master the fundamentals of creating and sticking to a budget",
    icon: "Calculator",
    difficulty: "Beginner",
    duration: "45 min",
    color: "green",
    lessons: [
      {
        id: "what-is-budgeting",
        title: "What is Budgeting?",
        type: "reading",
        duration: "5 min",
        isCompleted: false,
        content: `# What is Budgeting?

Budgeting is the process of creating a plan for how you'll spend your money. Think of it as a roadmap for your finances - it helps you understand where your money comes from and where it goes.

## Why Budget?

A budget helps you:
- **Take control** of your money instead of wondering where it went
- **Achieve your goals** by allocating money toward what matters most
- **Avoid debt** by ensuring you don't spend more than you earn
- **Build wealth** by consistently saving and investing

## The Psychology of Money

Many people avoid budgeting because they think it's restrictive. But here's the truth: **a budget actually gives you more freedom**. When you know exactly how much you can spend on entertainment, dining out, or hobbies, you can enjoy those expenses guilt-free.

## Common Budgeting Myths

**Myth 1:** "Budgeting is only for people who are broke"\n
#### **Reality:** Wealthy people budget more than anyone else. It's how they stay wealthy.

**Myth 2:** "I don't make enough money to budget"\n
#### **Reality:** The less money you have, the more important it is to budget every dollar.

**Myth 3:** "Budgeting takes too much time"\n
#### **Reality:** Once set up, budgeting takes just 15-20 minutes per week.`,
        keyPoints: [
          "Budgeting is a plan for spending your money",
          "It provides financial control and freedom",
          "Wealthy people budget more than poor people",
          "A good budget takes only 15-20 minutes per week to maintain",
        ],
      },
      {
        id: "income-vs-expenses",
        title: "Understanding Income vs Expenses",
        type: "interactive",
        duration: "8 min",
        isCompleted: false,
        content: `# Income vs Expenses: The Foundation

Before you can create a budget, you need to understand the two fundamental components: what comes in (income) and what goes out (expenses).

## Types of Income

### Primary Income
- Salary or wages from your main job
- Tips and bonuses
- Commission earnings

### Secondary Income
- Side hustle earnings
- Freelance work
- Rental income
- Investment dividends

## Types of Expenses

### Fixed Expenses (Same amount each month)
- Rent or mortgage
- Insurance premiums
- Loan payments
- Subscription services

### Variable Expenses (Amount changes)
- Groceries
- Utilities
- Gas for your car
- Entertainment

### Irregular Expenses (Don't happen every month)
- Car maintenance
- Medical bills
- Gifts
- Vacation

## The Golden Rule

**Your expenses should never exceed your income.** If they do, you're going into debt. The goal is to have income > expenses, with the difference going toward savings and investments.

## Quick Exercise

Take a moment to think about your own finances:
1. What's your monthly take-home income?
2. What are your biggest fixed expenses?
3. Where do you think you spend the most on variable expenses?`,
        keyPoints: [
          "Income includes all money coming in (salary, side hustles, investments)",
          "Fixed expenses stay the same each month",
          "Variable expenses change month to month",
          "Income must be greater than expenses to build wealth",
        ],
        quiz: {
          question: "Which of these is considered a fixed expense?",
          options: ["Groceries", "Rent payment", "Gas for your car", "Entertainment"],
          correctAnswer: 1,
          explanation:
            "Rent is a fixed expense because it's the same amount every month. Groceries, gas, and entertainment are variable expenses that change based on your usage and choices.",
        },
      },
      {
        id: "50-30-20-rule",
        title: "The 50/30/20 Rule",
        type: "video",
        duration: "10 min",
        isCompleted: false,
        content: `# The 50/30/20 Rule: Simple Budgeting Made Easy

The 50/30/20 rule is one of the most popular and effective budgeting methods. It's simple, flexible, and perfect for beginners.

## How It Works

Divide your after-tax income into three categories:

### 50% - Needs (Essential Expenses)
- Housing (rent/mortgage, utilities)
- Transportation (car payment, gas, insurance)
- Groceries and basic clothing
- Minimum debt payments
- Basic phone plan

### 30% - Wants (Lifestyle Expenses)
- Dining out and entertainment
- Hobbies and subscriptions
- Shopping for non-essentials
- Gym memberships
- Travel and vacations

### 20% - Savings & Debt Repayment
- Emergency fund
- Retirement contributions
- Extra debt payments
- Investment accounts
- Long-term savings goals

## Example: $4,000 Monthly Income

- **$2,000 (50%) for Needs:** Rent, utilities, groceries, car payment
- **$1,200 (30%) for Wants:** Restaurants, entertainment, shopping
- **$800 (20%) for Savings:** Emergency fund, 401k, extra debt payments

## Why This Rule Works

1. **Simple to remember** - Just three categories
2. **Flexible** - You can adjust within each category
3. **Balanced** - Covers necessities while allowing fun
4. **Builds wealth** - Forces you to save 20% consistently

## Adapting the Rule

If you're in debt or have low income, you might use:
- **60/20/20** - More for needs, less for wants
- **50/20/30** - More for savings, less for wants

The key is finding what works for your situation while maintaining the savings habit.`,
        keyPoints: [
          "50% of income goes to essential needs",
          "30% goes to wants and lifestyle expenses",
          "20% goes to savings and debt repayment",
          "The rule can be adapted based on your situation",
        ],
      },
      {
        id: "creating-your-budget",
        title: "Creating Your First Budget",
        type: "interactive",
        duration: "12 min",
        isCompleted: false,
        content: `# Creating Your First Budget: Step by Step

Now that you understand the basics, let's create your actual budget. Follow these steps to build a budget that works for you.

## Step 1: Calculate Your Monthly Income

Add up all money coming in each month:
- Take-home pay from your job
- Side hustle income
- Any other regular income

**Important:** Use your after-tax income (what actually hits your bank account).

## Step 2: List All Your Expenses

### Fixed Expenses
Write down expenses that are the same each month:
- Rent/mortgage
- Insurance
- Loan payments
- Subscriptions

### Variable Expenses
Estimate expenses that change:
- Groceries
- Utilities
- Gas
- Entertainment

**Pro Tip:** Look at your last 3 months of bank statements to get accurate averages.

## Step 3: Apply the 50/30/20 Rule

1. Multiply your income by 0.50 for needs budget
2. Multiply your income by 0.30 for wants budget  
3. Multiply your income by 0.20 for savings budget

## Step 4: Assign Every Dollar

Make sure every dollar of income has a purpose:
- Needs expenses
- Wants expenses
- Savings goals
- Emergency fund

## Step 5: Track and Adjust

Your first budget won't be perfect. Track your spending for a month, then adjust:
- Move money between categories as needed
- Cut expenses that don't add value
- Increase savings when possible

## Budget Tools

- **Pen and paper** - Simple and effective
- **Spreadsheets** - More detailed tracking
- **Apps** - Mint, YNAB, EveryDollar
- **Bank tools** - Many banks offer budgeting features

## Common First-Time Mistakes

1. **Being too restrictive** - Allow some fun money
2. **Forgetting irregular expenses** - Budget for car maintenance, gifts
3. **Not tracking spending** - A budget only works if you follow it
4. **Giving up too quickly** - It takes 2-3 months to get the hang of it`,
        keyPoints: [
          "Start with your actual take-home income",
          "List all fixed and variable expenses",
          "Apply the 50/30/20 rule as a starting point",
          "Track spending and adjust your budget monthly",
        ],
        quiz: {
          question: "When creating your first budget, what income should you use?",
          options: [
            "Gross income (before taxes)",
            "Take-home pay (after taxes)",
            "Only your salary",
            "Income plus potential bonuses",
          ],
          correctAnswer: 1,
          explanation:
            "Always use your take-home pay (after taxes) when budgeting. This is the actual money you have available to spend and save each month.",
        },
      },
      {
        id: "sticking-to-budget",
        title: "How to Stick to Your Budget",
        type: "reading",
        duration: "10 min",
        isCompleted: false,
        content: `# How to Stick to Your Budget: Practical Strategies

Creating a budget is easy. Sticking to it? That's where most people struggle. Here are proven strategies to help you stay on track.

## 1. Start Small and Realistic

Don't try to cut everything at once. If you currently spend $500/month dining out, don't budget $50. Start with $300 and gradually reduce.

## 2. Use the Envelope Method

For variable expenses like groceries and entertainment:
- Put cash in labeled envelopes
- When the envelope is empty, you're done spending in that category
- This creates a physical barrier to overspending

## 3. Automate Your Savings

Set up automatic transfers to savings accounts:
- Pay yourself first before you can spend the money
- Treat savings like a non-negotiable bill
- Start with even $25/week if that's all you can manage

## 4. Plan for Fun

A budget that's all restrictions will fail. Include money for:
- Entertainment and hobbies
- Spontaneous purchases
- Small treats and rewards

## 5. Track Weekly, Not Daily

Check your spending once a week:
- See which categories you're over/under
- Adjust spending for the rest of the month
- Don't obsess over every purchase

## 6. Use the 24-Hour Rule

For non-essential purchases over $50:
- Wait 24 hours before buying
- Often the urge to purchase will pass
- Ask yourself: "Do I need this or just want it?"

## 7. Find Your Spending Triggers

Common triggers include:
- **Emotional spending** - Shopping when stressed or sad
- **Social spending** - Overspending to keep up with friends
- **Convenience spending** - Buying expensive options when rushed

## 8. Celebrate Small Wins

Acknowledge your progress:
- Stayed under budget this week? Treat yourself (within budget)
- Reached a savings goal? Do something special
- Positive reinforcement builds lasting habits

## 9. Plan for Setbacks

You will overspend sometimes. When it happens:
- Don't abandon your budget entirely
- Adjust other categories to compensate
- Learn from what caused the overspending
- Get back on track the next day

## 10. Review and Adjust Monthly

Your budget should evolve:
- Life changes, and your budget should too
- Move money between categories as needed
- Increase savings as your income grows
- Cut categories that aren't working

## The 80/20 Rule of Budgeting

Focus on the big expenses first:
- Housing, transportation, and food are usually 60-70% of spending
- Small optimizations here have huge impact
- Don't stress about every coffee purchase if your rent is too high

Remember: **A good budget is one you actually follow, not a perfect one you abandon.**`,
        keyPoints: [
          "Start with realistic budget amounts, not extreme cuts",
          "Automate savings to pay yourself first",
          "Include fun money to avoid feeling restricted",
          "Focus on big expenses for maximum impact",
        ],
      },
    ],
    published_at: "Aug 10",
  },
  "saving-strategies": {
    slug: "saving-strategies",
    title: "Saving Strategies",
    description: "Build emergency funds and reach your financial goals faster",
    icon: "PiggyBank",
    difficulty: "Beginner",
    duration: "35 min",
    color: "yellow",
    lessons: [
      {
        id: "why-save",
        title: "Why Saving Matters",
        type: "reading",
        duration: "6 min",
        isCompleted: false,
        content: `# Why Saving Matters: Your Financial Safety Net

Saving money isn't just about having cash in the bank - it's about creating freedom, security, and opportunities for your future.

## The Power of Savings

### Financial Security
- **Emergency buffer** for unexpected expenses
- **Peace of mind** knowing you can handle surprises
- **Reduced stress** about money problems

### Freedom and Opportunities
- **Career flexibility** - you can take risks or change jobs
- **Investment opportunities** - money available for good deals
- **Life choices** - travel, education, starting a business

## The Cost of Not Saving

Without savings, you're vulnerable to:
- **Debt cycles** - using credit cards for emergencies
- **Limited options** - stuck in bad situations
- **Stress and anxiety** - constant worry about money
- **Missed opportunities** - can't invest when markets are down

## The Compound Effect

Small amounts saved consistently become large amounts over time:
- $50/month for 10 years = $6,000 saved
- With 5% interest = $7,764
- With 7% interest = $8,609

## Common Saving Excuses (And Why They're Wrong)

**"I don't make enough to save"**
- Even $5/week adds up to $260/year
- Start small and increase gradually

**"I'll save when I make more money"**
- Expenses tend to grow with income
- Build the habit now with any amount

**"Saving is boring"**
- Set exciting goals for your savings
- Gamify the process with challenges`,
        keyPoints: [
          "Savings provide financial security and peace of mind",
          "Even small amounts compound significantly over time",
          "Savings create opportunities and freedom",
          "Start saving now, regardless of income level",
        ],
      },
      {
        id: "emergency-fund",
        title: "Building Your Emergency Fund",
        type: "interactive",
        duration: "10 min",
        isCompleted: false,
        content: `# Building Your Emergency Fund: Your First Priority

An emergency fund is money set aside specifically for unexpected expenses. It's your financial safety net and should be your first savings goal.

## What Counts as an Emergency?

### True Emergencies
- Job loss or reduced income
- Major medical expenses
- Essential car repairs
- Home repairs (roof, plumbing, heating)
- Family emergencies

### NOT Emergencies
- Vacations
- Christmas gifts
- New clothes
- Eating out
- Sale items you "can't miss"

## How Much Should You Save?

### Starter Emergency Fund: $1,000
- Covers most small emergencies
- Prevents using credit cards
- Achievable goal for beginners

### Full Emergency Fund: 3-6 Months of Expenses
- Calculate your monthly essential expenses
- Multiply by 3-6 depending on job stability
- Example: $3,000/month expenses = $9,000-$18,000 fund

## Where to Keep Your Emergency Fund

### High-Yield Savings Account
- **Pros:** Easy access, earns interest, FDIC insured
- **Cons:** Lower returns than investments
- **Best for:** Most people

### Money Market Account
- **Pros:** Higher interest than regular savings
- **Cons:** May have minimum balance requirements
- **Best for:** Larger emergency funds

### NOT in Checking Account
- Too easy to spend accidentally
- Usually earns no interest

## Building Your Fund Step by Step

### Step 1: Set Your Goal
- Start with $1,000 if you have debt
- Aim for 3-6 months expenses if debt-free

### Step 2: Open a Separate Account
- Name it "Emergency Fund"
- Keep it at a different bank if needed
- Make it slightly inconvenient to access

### Step 3: Automate Your Savings
- Set up automatic transfer after each paycheck
- Start with whatever you can afford
- Increase the amount as you adjust your budget

### Step 4: Find Extra Money
- Tax refunds
- Bonuses
- Side hustle income
- Selling unused items

## Emergency Fund Milestones

- **$250:** Covers small car repairs
- **$500:** Handles minor medical bills
- **$1,000:** Prevents most credit card debt
- **$2,500:** Covers major car repairs
- **$5,000:** Handles most home repairs
- **3-6 months:** Full financial security`,
        keyPoints: [
          "Start with a $1,000 starter emergency fund",
          "Keep emergency funds in a separate, accessible account",
          "True emergencies are unexpected and essential",
          "Automate transfers to build the fund consistently",
        ],
        quiz: {
          question: "Which of these is considered a true emergency?",
          options: [
            "Christmas gifts",
            "A vacation you really want",
            "Your car breaks down and you need it for work",
            "A great sale on clothes",
          ],
          correctAnswer: 2,
          explanation:
            "A car breakdown that affects your ability to work is a true emergency because it's unexpected and essential. The other options are planned expenses or wants, not emergencies.",
        },
      },
    ],
    published_at: "Aug 10",
  },
  "saving-and-banking": {
    slug: "saving-and-banking",
    title: "Saving and Banking",
    description: "Help players discover why saving matters and how bank accounts work",
    icon: "PiggyBank",
    difficulty: "Beginner",
    duration: "40 min",
    color: "red",
    lessons: [
      {
        id: "saving",
        title: "Saving",
        type: "reading",
        duration: "10 min",
        isCompleted: false,
        content: `**Hey there, Smart Saver!**

Imagine you see something cool—a shiny bicycle, a video game, or a dream trip. Now, that feeling of excitement is awesome! But what if you don’t have enough money right away? That’s where **saving** comes in.\n
Saving means putting a little money aside so that someday, you can afford that big or special thing. Plus, if you save in a safe place—like a bank—your money stays safe and can even grow over time!


### **Why Saving Rocks**

* **Make your dreams real**: Saving turns “I wish I had that…” into “I made it happen!”
* **Be prepared for surprises**: Stuff happens—a toy breaks or you need to rush somewhere. Savings help you handle surprise costs without panic.
* **Power boost for your money**: Especially when kept in a bank, your saved money can grow\... little by little.


### **Your Savings Goals—From Small to Epic**

Think of savings goals like levels of adventure:

* **Quick quests**: Things you want in a snap—like a snack or small toy.
* **Mid-level missions**: Bigger goals—like that bike or a fun trip with friends.
* **Big boss challenges**: Huge dreams—maybe college, your first travel, or even retirement one day.
  Having a goal helps you stay motivated!`,
        keyPoints: [
          "Saving means putting a little money aside",
          "Think of savings goals like levels of adventure",
          "Having a goal helps you stay motivated!",
        ],
      },
      {
        id: "bank-account",
        title: "What is a Bank account",
        type: "interactive",
        duration: "10 min",
        isCompleted: false,
        content: `### **What’s a Bank Account, Anyway?**

A bank account is like a super-safe piggy bank that you can visit anytime—and it does more than just hold coins:

* Keeps your money safe (no worries about losing it or spills!).
* It can grow—just a little extra added from time to time.

There are two types:

* **Savings account**—great for storing money and watching it grow.
* **Checking account**—perfect for everyday spending with debit cards, checks, or ATMs.


### **Interest: Your Money’s Secret Superpower**

* **Simple interest**: Gets you a steady, small bonus on the money you saved.
* **Compound interest**: This is the magic! You earn interest on your money, *and* on the interest it already made. Your savings can grow faster—like your money having its own cheer squad!


### **Emergency Fund: Your Safety Shield**

Life throws curveballs sometimes—like broken electronics or surprise trips. Having an emergency fund is like keeping a shield handy. Saving even a little bit regularly (for these “just in case” moments) makes you feel strong and ready.`,
        keyPoints: [
          "Think of a bank account like a safe piggybank",
          "There are two types of accounts: savings and checking",
          "Keep emergency funds as they are unexpected and essential",
        ],
        quiz: {
          question: "We have how many main types of bank accounts?",
          options: [
            "4",
            "1",
            "2",
            "3",
          ],
          correctAnswer: 2,
          explanation:
            "There are two types: Savings account and Checking account",
        },
      },
      {
        id: "smart-goals",
        title: "Setting Smart Savings Goals (SMART Style!)",
        type: "reading",
        duration: "10 min",
        isCompleted: false,
        content: `### **Setting Smart Savings Goals (SMART Style!)**

Make your goal **S‑M‑A‑R‑T**:

* **Specific**: Know exactly what you’re saving for.
* **Measurable**: Figure out how much it costs.
* **Achievable**: Choose a goal you can reach.
* **Relevant**: Make sure it matters to *you*.
* **Time‑bound**: Pick a target date to hit it.
  Example: “I want to save \$50 in 5 weeks by saving \$10 each week.”


### **Awesome Tips to Grow Your Savings**

1. **Use jars or piggy banks**—seeing your savings grow is super rewarding! 
2. **Make it a game**—track progress, celebrate milestones! 
3. **Set short goals first**—hitting small goals gives a boost to reach bigger ones. 
4. **Open a kids’ bank account together**—make it real and fun. 


### **To Sum It Up…**

Saving means making your dreams happen, keeping your money safe, and letting time do the magic with interest. Whether you're saving for something small or big, every penny counts!`,
        keyPoints: [
          "Set SMART goals when planning to save",
          "You can use jars or piggy banks for small savings",
        ],
      },
    ],
    published_at: "Aug 10",
  },
}
