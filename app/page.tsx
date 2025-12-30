"use client"

import { DiscoveryForm } from "@/components/discovery-form";
import { ProblemCard } from "@/components/problem-card";
import { useState } from "react";
import { Sparkles, Zap } from "lucide-react";

export default function Home() {
  const [problems, setProblems] = useState<any[] | null>(null);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-8 animate-in fade-in zoom-in-95 duration-1000">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary font-medium text-sm tracking-widest uppercase hover:bg-primary/10 transition-colors cursor-default">
            <Zap className="w-4 h-4 fill-current" />
            Architect the Future
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 pb-2 text-glow">
            Problem Finder AI
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Escape the "AI Slop". Discover <span className="text-white font-medium">real-world, high-impact</span> problems tailored to your unique skills and ambitions.
          </p>
        </div>

        {/* Dynamic Content */}
        {!problems ? (
          <div className="max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-backwards">
            <div className="glass rounded-2xl p-1 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="bg-card/50 backdrop-blur-xl rounded-xl p-6 md:p-8 relative">
                <DiscoveryForm onResults={setProblems} />
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="flex justify-between items-end animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="space-y-1">
                <h2 className="text-3xl font-bold tracking-tight text-white">Your Missions</h2>
                <p className="text-muted-foreground">Select a problem to start building.</p>
              </div>
              <button
                onClick={() => setProblems(null)}
                className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-sm font-medium tracking-wide"
              >
                Reset
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {problems.map((problem, idx) => (
                <div
                  key={idx}
                  className="animate-in fade-in slide-in-from-bottom-8 fill-mode-backwards"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <ProblemCard problem={problem} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
