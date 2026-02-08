import { ExcelxioreHeader } from "@/components/excelxiore-header"
import { ExcelxioreHero } from "@/components/excelxiore-hero"
import { ExcelxioreFeatures } from "@/components/excelxiore-features"
import { ExcelxioreAISection } from "@/components/excelxiore-ai-section"
import { ExcelxioreStats } from "@/components/excelxiore-stats"
import { ExcelxioreCTA } from "@/components/excelxiore-cta"
import { ExcelxioreFooter } from "@/components/excelxiore-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ExcelxioreHeader />
      <ExcelxioreHero />
      <ExcelxioreStats />
      <ExcelxioreFeatures />
      <ExcelxioreAISection />
      <ExcelxioreCTA />
      <ExcelxioreFooter />
    </main>
  )
}
