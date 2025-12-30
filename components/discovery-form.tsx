"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { generateProblems } from "@/app/actions"
import { Loader2, Sparkles } from "lucide-react"
import { Problem } from "@/lib/types"

const formSchema = z.object({
  skills: z.string().min(2, {
    message: "Skills must be at least 2 characters.",
  }),
  interests: z.string().min(2, {
    message: "Interests must be at least 2 characters.",
  }),
  difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]),
  goal: z.enum(["Resume", "Startup", "Learning"]),
})

export function DiscoveryForm({ onResults }: { onResults: (data: Problem[]) => void }) {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: "",
      interests: "",
      difficulty: "Intermediate",
      goal: "Resume",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const results = await generateProblems(values)
      onResults(results)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80 font-heading tracking-wide">Your Arsenal</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. React, Python, PostgreSQL..."
                    {...field}
                    className="bg-black/20 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary focus-visible:border-primary/50 h-12"
                  />
                </FormControl>
                <FormDescription className="text-xs text-white/50">
                  Languages, frameworks, or tools you want to leverage.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interests"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80 font-heading tracking-wide">Target Sector</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. FinTech, Healthcare, Gaming..."
                    {...field}
                    className="bg-black/20 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-secondary focus-visible:border-secondary/50 h-12"
                  />
                </FormControl>
                <FormDescription className="text-xs text-white/50">
                  Industries that fascinate you.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="difficulty"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80 font-heading tracking-wide">Complexity</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-black/20 border-white/10 text-white focus:ring-primary h-12">
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#05051a] border-white/10 text-white">
                      <SelectItem value="Beginner" className="focus:bg-primary/20 focus:text-white">Beginner</SelectItem>
                      <SelectItem value="Intermediate" className="focus:bg-primary/20 focus:text-white">Intermediate</SelectItem>
                      <SelectItem value="Advanced" className="focus:bg-primary/20 focus:text-white">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="goal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80 font-heading tracking-wide">Objective</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-black/20 border-white/10 text-white focus:ring-secondary h-12">
                        <SelectValue placeholder="Select goal" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#05051a] border-white/10 text-white">
                      <SelectItem value="Resume" className="focus:bg-secondary/20 focus:text-white">Resume Booster</SelectItem>
                      <SelectItem value="Startup" className="focus:bg-secondary/20 focus:text-white">Startup MVP</SelectItem>
                      <SelectItem value="Learning" className="focus:bg-secondary/20 focus:text-white">Deep Learning</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-12 text-lg font-bold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg shadow-primary/25 border-none transition-all duration-300 hover:scale-[1.01] hover:shadow-primary/40"
          disabled={isLoading}
        >
          {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Sparkles className="mr-2 h-5 w-5 fill-white/20" />}
          Generate Concepts
        </Button>
      </form>
    </Form>
  )
}
