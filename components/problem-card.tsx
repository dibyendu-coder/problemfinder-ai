import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Users, Lightbulb, TrendingUp } from "lucide-react"

interface ProblemCardProps {
    problem: {
        title: string
        rationale: string
        targetUser: string
        solution: string
        techStack: string
        features: string[]
        difficulty: string
        realWorldImpact: string
        validationStatus: string
    }
}

export function ProblemCard({ problem }: ProblemCardProps) {
    const getValidationColor = (status: string) => {
        switch (status) {
            case "Validated": return "bg-green-100 text-green-800 hover:bg-green-100 border-green-200";
            case "Needs More Research": return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 border-yellow-200";
            case "Unvalidated": return "bg-gray-100 text-gray-800 hover:bg-gray-100 border-gray-200";
            default: return "secondary";
        }
    }

    return (
        <Card className="flex flex-col h-full hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 border-border/50 group/card relative overflow-hidden">
            {/* Subtle gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <CardHeader>
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 z-10 w-full">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className={`font-normal ${getValidationColor(problem.validationStatus)}`}>
                                {problem.validationStatus}
                            </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold">{problem.title}</CardTitle>
                        <CardDescription className="mt-2 line-clamp-2">{problem.rationale}</CardDescription>
                    </div>
                    <Badge variant={problem.difficulty === "Advanced" ? "destructive" : problem.difficulty === "Intermediate" ? "default" : "secondary"}>
                        {problem.difficulty}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-4 z-10">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <Users className="w-4 h-4" /> Target User
                    </div>
                    <p className="text-sm">{problem.targetUser}</p>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <Lightbulb className="w-4 h-4" /> Solution
                    </div>
                    <p className="text-sm">{problem.solution}</p>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <TrendingUp className="w-4 h-4" /> Real World Impact
                    </div>
                    <p className="text-sm italic text-muted-foreground/80 border-l-2 border-primary/20 pl-3">"{problem.realWorldImpact}"</p>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <Code className="w-4 h-4" /> Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {problem.techStack.split(',').map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs bg-background/50">{tech.trim()}</Badge>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">MVP Features</p>
                    <ul className="text-sm list-disc list-inside text-muted-foreground/90">
                        {problem.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </CardContent>
            <CardFooter className="z-10">
                <Button className="w-full gap-2 group">
                    Start Building <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </CardFooter>
        </Card>
    )
}
