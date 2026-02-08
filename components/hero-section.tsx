import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-background" />
        <img src="/elegant-modern-luxury-interior-design-minimalist.jpg" alt="Hero background" className="h-full w-full object-cover opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            New Collection Available
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance mb-6">
            Elevate your lifestyle
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl text-pretty">
            Discover our curated selection of premium products designed to bring elegance and sophistication to your
            everyday life. Quality craftsmanship meets modern design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-primary" />
              Free Shipping Worldwide
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-primary" />
              24/7 Customer Support
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-primary" />
              Secure Checkout
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
