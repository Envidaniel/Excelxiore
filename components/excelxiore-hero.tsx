"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function ExcelxioreHero() {
  return (
    <section className="pt-32 pb-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Propulsé par l'IA</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Transformez votre vie avec <span className="text-primary">l'IA</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
            Nutrition personnalisée, coaching sportif intelligent et optimisation de la productivité. Atteignez vos
            objectifs avec un accompagnement IA 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              Commencer gratuitement
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Voir la démo
            </Button>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative">
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-2xl">
              <img src="/modern-ai-wellness-dashboard-with-nutrition-fitnes.jpg" alt="Excelxiore Dashboard" className="w-full h-auto" />
            </div>
            {/* Floating Cards */}
            <div className="absolute -left-4 top-1/4 hidden lg:block">
              <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary">2,500</div>
                <div className="text-sm text-muted-foreground">Calories</div>
              </div>
            </div>
            <div className="absolute -right-4 top-1/3 hidden lg:block">
              <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-sm text-muted-foreground">Objectifs atteints</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
