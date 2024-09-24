'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Search, ChevronRight, ArrowRight, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function RefinedECommercePage() {
  const categories = [
    { name: "Women's Fashion", image: "/placeholder.svg?height=400&width=400" },
    { name: "Men's Clothing", image: "/placeholder.svg?height=400&width=400" },
    { name: "Accessories", image: "/placeholder.svg?height=400&width=400" },
    { name: "Shoes", image: "/placeholder.svg?height=400&width=400" },
    { name: "Beauty", image: "/placeholder.svg?height=400&width=400" },
    { name: "Home & Living", image: "/placeholder.svg?height=400&width=400" },
  ]

  const featuredProducts = [
    { name: "Summer Dress", price: 59.99, image: "/placeholder.svg?height=300&width=300" },
    { name: "Leather Wallet", price: 39.99, image: "/placeholder.svg?height=300&width=300" },
    { name: "Wireless Earbuds", price: 129.99, image: "/placeholder.svg?height=300&width=300" },
    { name: "Smartwatch", price: 199.99, image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <ShoppingCart className="h-6 w-6" />
            <span className="font-bold text-xl">ShopEase</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">
              Products
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">
              Categories
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <form className="hidden lg:block">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 w-[300px] bg-background"
                />
              </div>
            </form>
            <Button size="icon" variant="ghost">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt="Hero Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/placeholder.svg?height=550&width=550"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Your Style
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Explore our curated collection of trendsetting fashion and accessories. Elevate your wardrobe today.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                    Shop Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
              <Link href="#" className="text-primary hover:underline flex items-center group">
                View all <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:-translate-y-1">
                  <Image
                    alt={product.name}
                    className="object-cover w-full h-60 transition-transform group-hover:scale-105"
                    height="300"
                    src={product.image}
                    width="300"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                    <div className="flex justify-between items-center">
                      <Button className="w-full mr-2">Add to Cart</Button>
                      <Button size="icon" variant="outline">
                        <Heart className="h-4 w-4" />
                        <span className="sr-only">Add to wishlist</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Shop by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Link key={index} href="#" className="group relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-64 transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity group-hover:bg-opacity-50">
                    <h3 className="text-white text-2xl font-bold text-center">{category.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Special Offers
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Summer Sale"
                  width={800}
                  height={400}
                  className="object-cover w-full h-64 md:h-80 transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center p-6">
                  <h3 className="text-white text-3xl font-bold mb-2">Summer Sale</h3>
                  <p className="text-gray-200 mb-4">Up to 50% off on selected items</p>
                  <Button className="bg-white text-black hover:bg-gray-200">Shop Now</Button>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="New Arrivals"
                  width={800}
                  height={400}
                  className="object-cover w-full h-64 md:h-80 transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center p-6">
                  <h3 className="text-white text-3xl font-bold mb-2">New Arrivals</h3>
                  <p className="text-gray-200 mb-4">Check out our latest collection</p>
                  <Button className="bg-white text-black hover:bg-gray-200">Explore</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">About Us</h4>
              <p className="text-sm text-gray-400">We're passionate about bringing you the latest fashion trends and high-quality products.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Categories</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Customer Service</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Size Guide</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Track Order</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            © 2023 ShopEase. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}