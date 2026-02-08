export function StatsSection() {
  const stats = [
    { value: "10K+", label: "Happy Customers", company: "Worldwide" },
    { value: "98%", label: "Satisfaction Rate", company: "Based on Reviews" },
    { value: "500+", label: "Premium Products", company: "Curated Selection" },
    { value: "50+", label: "Countries Served", company: "Global Reach" },
  ]

  return (
    <section className="py-16 md:py-24 border-y border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="font-serif text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm font-medium mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
