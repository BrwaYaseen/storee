"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("m");
  const [mainImage, setMainImage] = useState(
    "/placeholder.svg?height=600&width=600"
  );

  const product = {
    name: "Classic Cotton T-Shirt",
    price: 29.99,
    description:
      "Our Classic Cotton T-Shirt is a wardrobe essential. Made from 100% premium cotton, it offers both comfort and style for everyday wear.",
    sizes: ["xs", "s", "m", "l", "xl"],
    colors: ["White", "Black", "Navy", "Gray"],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600&text=Image+2",
      "/placeholder.svg?height=600&width=600&text=Image+3",
      "/placeholder.svg?height=600&width=600&text=Image+4",
    ],
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Durable stitching",
      "Pre-shrunk fabric",
      "Easy to care for",
    ],
    careInstructions: [
      "Machine wash cold",
      "Tumble dry low",
      "Do not bleach",
      "Iron on low heat if needed",
    ],
  };

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-4"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to products
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-200">
            <Image
              src={mainImage}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, index) => (
              <button
                key={index}
                className="aspect-square relative overflow-hidden rounded-md bg-gray-200"
                onClick={() => setMainImage(img)}
              >
                <Image
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-center object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-3xl text-gray-900">
              ${product.price.toFixed(2)}
            </p>
            <div className="mt-4 flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-400 fill-current"
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">(121 reviews)</span>
            </div>
          </div>

          <p className="text-gray-700">{product.description}</p>

          <div>
            <h3 className="text-sm font-medium text-gray-900">Color</h3>
            <RadioGroup defaultValue="White" className="mt-2">
              {product.colors.map((color) => (
                <div key={color} className="flex items-center space-x-3">
                  <RadioGroupItem value={color} id={`color-${color}`} />
                  <Label htmlFor={`color-${color}`}>{color}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900">Size</h3>
            <RadioGroup
              value={selectedSize}
              onValueChange={setSelectedSize}
              className="mt-2"
            >
              {product.sizes.map((size) => (
                <div key={size} className="flex items-center space-x-3">
                  <RadioGroupItem value={size} id={`size-${size}`} />
                  <Label htmlFor={`size-${size}`}>{size.toUpperCase()}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
            <div className="mt-2 flex items-center space-x-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(-1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-gray-900">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button className="w-full">Add to Cart</Button>

          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="care">Care Instructions</TabsTrigger>
            </TabsList>
            <TabsContent value="features">
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="care">
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {product.careInstructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
