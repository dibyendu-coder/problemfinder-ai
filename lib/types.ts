export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced";
export type ValidationStatus = "Validated" | "Needs More Research" | "Unvalidated";
export type GoalType = "Resume" | "Startup" | "Learning";

export interface Problem {
    title: string;
    rationale: string;
    targetUser: string;
    solution: string;
    techStack: string;
    features: string[];
    difficulty: DifficultyLevel | string;
    realWorldImpact: string;
    validationStatus: ValidationStatus | string;
}

export interface DiscoveryFormData {
    skills: string;
    interests: string;
    difficulty: DifficultyLevel;
    goal: GoalType;
}
