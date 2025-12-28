"use client"

import { DiscoveryForm } from "@/components/discovery-form";
import { ProblemCard } from "@/components/problem-card";
import { useState } from "react";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [problems, setProblems] = useState<any[] | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-20">

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" /> AI-Powered Idea Generator
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Problem Finder AI
          </h1>
          <p className="text-lg text-muted-foreground">
            Stop guessing what to build. Discover real-world, solvable problems tailored to your skills and goals.
          </p>
        </div>

        {/* Dynamic Content */}
        {!problems ? (
          <div className="max-w-md mx-auto">
            <DiscoveryForm onResults={setProblems} />
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Recommended Projects</h2>
              <button
                onClick={() => setProblems(null)}
                className="text-sm text-primary hover:underline hover:text-primary/80 transition-colors"
              >
                Start Over
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem, idx) => (
                <ProblemCard key={idx} problem={problem} />
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
