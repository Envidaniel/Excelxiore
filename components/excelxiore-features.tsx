import { Apple, Dumbbell, Brain, Target, ChefHat, Calendar } from "lucide-react"

export function ExcelxioreFeatures() {
  const features = [
    {
      icon: Apple,
      title: "Nutrition Intelligente",
      description:
        "Plans alimentaires personnalisés basés sur vos objectifs, préférences et intolérances. L'IA ajuste en temps réel.",
    },
    {
      icon: Dumbbell,
      title: "Coaching Sportif",
      description: "Programmes d'entraînement adaptatifs qui évoluent avec votre progression et votre forme physique.",
    },
    {
      icon: Brain,
      title: "Productivité Optimale",
      description:
        "Techniques de gestion du temps, habitudes saines et routines optimisées par l'IA pour maximiser vos performances.",
    },
    {
      icon: Target,
      title: "Suivi d'Objectifs",
      description:
        "Définissez et atteignez vos objectifs avec un système de suivi intelligent et des rappels personnalisés.",
    },
    {
      icon: ChefHat,
      title: "Recettes Adaptées",
      description:
        "Des milliers de recettes saines adaptées à votre régime, avec instructions pas à pas et liste de courses.",
    },
    {
      icon: Calendar,
      title: "Planification Auto",
      description: "Organisation automatique de vos repas, entraînements et routines pour une semaine sans stress.",
    },
  ]

  return (
    <section id="features" className="py-24 px-4 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Une plateforme complète pour transformer votre santé, votre forme physique et votre productivité.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
