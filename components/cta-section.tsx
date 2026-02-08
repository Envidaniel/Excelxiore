import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            Join our exclusive community
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-primary-foreground/90 text-pretty">
            Subscribe to receive early access to new collections, exclusive offers, and styling tips from our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/20"
            />
            <Button size="lg" variant="secondary" className="group">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/70 mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
