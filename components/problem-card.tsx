import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Users, Lightbulb, TrendingUp, CheckCircle, AlertCircle, HelpCircle } from "lucide-react"
import { Problem } from "@/lib/types"

interface ProblemCardProps {
    problem: Problem
}

export function ProblemCard({ problem }: ProblemCardProps) {
    const getValidationIcon = (status: string) => {
        switch (status) {
            case "Validated": return <CheckCircle className="w-3 h-3 text-secondary" />;
            case "Needs More Research": return <HelpCircle className="w-3 h-3 text-yellow-400" />;
            case "Unvalidated": return <AlertCircle className="w-3 h-3 text-destructive" />;
            default: return null;
        }
    }

    const getDifficultyColor = (diff: string) => {
        switch (diff) {
            case "Beginner": return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
            case "Intermediate": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
            case "Advanced": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
            default: return "bg-primary/20 text-primary border-primary/30";
        }
    }

    return (
        <div className="group relative h-full">
            {/* Glass Card Container */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-xl transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_-5px_var(--color-primary)]" />

            <div className="relative p-6 h-full flex flex-col z-10">

                {/* Header */}
                <div className="flex justify-between items-start gap-4 mb-6">
                    <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className={`bg-black/40 backdrop-blur-md border-white/10 text-xs py-1 px-3 rounded-full flex gap-1.5 items-center transition-colors group-hover:border-primary/30`}>
                                {getValidationIcon(problem.validationStatus)}
                                <span className="opacity-80">{problem.validationStatus}</span>
                            </Badge>
                            <Badge className={`${getDifficultyColor(problem.difficulty)} border text-xs font-medium px-2.5 py-0.5 rounded-full`}>
                                {problem.difficulty}
                            </Badge>
                        </div>
                        <h3 className="text-2xl font-bold leading-tight font-heading group-hover:text-primary transition-colors duration-300">
                            {problem.title}
                        </h3>
                    </div>
                </div>

                {/* Content Details */}
                <div className="flex-1 space-y-6">
                    <div className="space-y-2">
                        <p className="text-base text-muted-foreground leading-relaxed">
                            {problem.rationale}
                        </p>
                        <div className="flex items-start gap-2 text-sm text-foreground/80 bg-white/5 p-3 rounded-lg border border-white/5">
                            <Lightbulb className="w-4 h-4 mt-0.5 text-yellow-400 shrink-0" />
                            <span>{problem.solution}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-1">
                            <h4 className="flex items-center gap-1.5 text-muted-foreground font-medium text-xs uppercase tracking-wider">
                                <Users className="w-3.5 h-3.5" /> Target User
                            </h4>
                            <p className="text-foreground/90 font-medium pl-5 border-l border-primary/20">
                                {problem.targetUser}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="flex items-center gap-1.5 text-muted-foreground font-medium text-xs uppercase tracking-wider">
                                <TrendingUp className="w-3.5 h-3.5" /> Impact
                            </h4>
                            <p className="text-foreground/90 font-medium pl-5 border-l border-secondary/20">
                                {problem.realWorldImpact}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h4 className="flex items-center gap-1.5 text-muted-foreground font-medium text-xs uppercase tracking-wider">
                            <Code className="w-3.5 h-3.5" /> Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {problem.techStack.split(',').map((tech, i) => (
                                <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-primary/90 hover:bg-primary/10 transition-colors cursor-default">
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer / CTA */}
                <div className="mt-8 pt-6 border-t border-white/5">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_-5px_var(--color-primary)] hover:shadow-[0_0_30px_-5px_var(--color-primary)] transition-all duration-300 group/btn">
                        Start Building This Project
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
