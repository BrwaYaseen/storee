import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <ShoppingCart className="h-6 w-6" />
          <span className="font-bold text-xl">ShopEase</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            Products
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            Categories
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
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
  );
}
