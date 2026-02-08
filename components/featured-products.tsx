import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Minimalist Leather Bag",
      price: 299,
      image: "/luxury-leather-bag-minimal.jpg",
      category: "Accessories",
    },
    {
      id: 2,
      name: "Premium Cotton Shirt",
      price: 159,
      image: "/premium-white-cotton-shirt-elegant.jpg",
      category: "Clothing",
    },
    {
      id: 3,
      name: "Designer Watch",
      price: 899,
      image: "/luxury-minimalist-watch-elegant.jpg",
      category: "Accessories",
    },
    {
      id: 4,
      name: "Silk Scarf Collection",
      price: 189,
      image: "/luxury-silk-scarf-elegant-pattern.jpg",
      category: "Accessories",
    },
  ]

  return (
    <section className="py-16 md:py-24" id="products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Featured Collection
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            Our signature pieces
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Handpicked products that embody quality, style, and timeless elegance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-border/40 hover:border-primary/40 transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-accent/10">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4">
                <div className="text-xs font-medium text-muted-foreground mb-2">{product.category}</div>
                <h3 className="font-medium mb-2 text-balance">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">${product.price}</span>
                  <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                    <ShoppingCart className="h-3.5 w-3.5" />
                    Add
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
