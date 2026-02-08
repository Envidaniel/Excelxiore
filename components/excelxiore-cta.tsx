import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ExcelxioreCTA() {
  return (
    <section className="py-24 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-primary/5 to-background p-12 md:p-16 text-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Prêt à transformer votre vie ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Rejoignez plus de 50 000 personnes qui ont déjà commencé leur transformation avec Excelxiore. Essai
              gratuit de 14 jours, sans carte bancaire.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                Commencer gratuitement
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Planifier une démo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Aucune carte bancaire requise • Annulation à tout moment
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
