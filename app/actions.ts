"use server"

export async function generateProblems(data: any) {
    // Mock delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock response based on input
    // In a real app, this would call Gemini/OpenAI
    return [
        {
            title: "Smart Subscription Tracker",
            rationale: "Users often lose track of monthly subscriptions and waste money.",
            targetUser: "Freelancers and Students saving money",
            solution: "A dashboard that scans email receipts or connects to bank APIs (Plaid) to identify recurring charges and alert users.",
            techStack: "Next.js, Plaid API, PostgreSQL",
            features: ["Dashboard view", "Email parsing integration", "Monthly spend analytics"],
            difficulty: "Intermediate",
        },
        {
            title: "AI-Powered Study Planner",
            rationale: "Students struggle to organize study time efficiently around exams.",
            targetUser: "College Students",
            solution: "An app that takes exam dates and syllabus, then generates a daily study schedule using AI.",
            techStack: "React, Python (FastAPI), Open AI API",
            features: ["Calendar integration", "Syllabus upload", "Progress tracking"],
            difficulty: "Beginner",
        },
        {
            title: "Local Event Aggregator",
            rationale: "Finding niche local events is fragmented across Facebook, Meetup, and flyers.",
            targetUser: "Community seekers",
            solution: "An aggregator that scrapes local event sites and categorizes them by interest.",
            techStack: "Node.js (Puppeteer), Next.js, MongoDB",
            features: ["Map view", "Category filtering", "User reviews"],
            difficulty: "Advanced",
        }
    ]
}
