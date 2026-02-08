"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function ExcelxioreHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-foreground">Excelxiore</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Fonctionnalités
            </a>
            <a href="#ai" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              IA
            </a>
            <a href="#nutrition" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Nutrition
            </a>
            <a href="#fitness" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sport
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Tarifs
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Connexion
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Commencer
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#features" className="text-sm text-foreground hover:text-primary transition-colors">
              Fonctionnalités
            </a>
            <a href="#ai" className="text-sm text-foreground hover:text-primary transition-colors">
              IA
            </a>
            <a href="#nutrition" className="text-sm text-foreground hover:text-primary transition-colors">
              Nutrition
            </a>
            <a href="#fitness" className="text-sm text-foreground hover:text-primary transition-colors">
              Sport
            </a>
            <a href="#pricing" className="text-sm text-foreground hover:text-primary transition-colors">
              Tarifs
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="ghost" size="sm" className="w-full">
                Connexion
              </Button>
              <Button size="sm" className="w-full bg-primary text-primary-foreground">
                Commencer
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
