import { Sparkles, MessageSquare, LineChart, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ExcelxioreAISection() {
  const aiFeatures = [
    {
      icon: MessageSquare,
      title: "Assistant IA Personnel",
      description:
        "Posez des questions, obtenez des conseils instantanés sur la nutrition, l'exercice et la productivité.",
    },
    {
      icon: LineChart,
      title: "Analyse Prédictive",
      description: "L'IA analyse vos données pour prédire vos besoins et optimiser vos résultats.",
    },
    {
      icon: Zap,
      title: "Adaptation Instantanée",
      description: "Votre plan s'ajuste automatiquement selon votre progression et votre rythme de vie.",
    },
  ]

  return (
    <section id="ai" className="py-24 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-3 w-3 text-primary" />
              <span className="text-xs text-primary font-medium">INTELLIGENCE ARTIFICIELLE</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              L'IA qui comprend <span className="text-primary">vos besoins</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Notre technologie d'IA avancée apprend de vos habitudes, s'adapte à votre style de vie et vous accompagne
              vers vos objectifs de manière personnalisée.
            </p>

            <div className="space-y-6 mb-8">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Découvrir l'IA
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-xl">
              <img src="/ai-chat-interface-wellness-coach-conversation.jpg" alt="AI Assistant Interface" className="w-full h-auto" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
