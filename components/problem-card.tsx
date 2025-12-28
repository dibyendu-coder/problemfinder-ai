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
import { ArrowRight, Code, Users, Lightbulb } from "lucide-react"

interface ProblemCardProps {
    problem: {
        title: string
        rationale: string
        targetUser: string
        solution: string
        techStack: string
        features: string[]
        difficulty: string
    }
}

export function ProblemCard({ problem }: ProblemCardProps) {
    return (
        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 border-border/50">
            <CardHeader>
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <CardTitle className="text-xl font-bold">{problem.title}</CardTitle>
                        <CardDescription className="mt-2 line-clamp-2">{problem.rationale}</CardDescription>
                    </div>
                    <Badge variant={problem.difficulty === "Advanced" ? "destructive" : problem.difficulty === "Intermediate" ? "default" : "secondary"}>
                        {problem.difficulty}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
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
                        <Code className="w-4 h-4" /> Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {problem.techStack.split(',').map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs">{tech.trim()}</Badge>
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
            <CardFooter>
                <Button className="w-full gap-2 group">
                    Start Building <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </CardFooter>
        </Card>
    )
}
