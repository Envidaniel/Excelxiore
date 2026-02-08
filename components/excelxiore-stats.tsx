export function ExcelxioreStats() {
  const stats = [
    { value: "50K+", label: "Utilisateurs actifs" },
    { value: "1M+", label: "Repas planifiés" },
    { value: "98%", label: "Satisfaction" },
    { value: "24/7", label: "Support IA" },
  ]

  return (
    <section className="py-16 px-4 lg:px-8 border-y border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
