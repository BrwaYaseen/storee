"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  subcategory: string;
}

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;

  const [products, setProducts] = useState<Product[]>([]);
  const [subcategory, setSubcategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      // In a real application, you would fetch data from an API
      // This is a mock API call
      const response = await fetch(`/api/products?category=${category}`);
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    };

    fetchProducts();
  }, [category]);

  const subcategories = Array.from(
    new Set(products.map((product) => product.subcategory))
  );

  const filteredProducts = subcategory
    ? products.filter((product) => product.subcategory === subcategory)
    : products;

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{category}</h1>

      <div className="mb-6">
        <Select onValueChange={(value) => setSubcategory(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by subcategory" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Subcategories</SelectItem>
            {subcategories.map((sub) => (
              <SelectItem key={sub} value={sub}>
                {sub}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              <p className="text-lg font-bold mt-2">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">{product.subcategory}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No products found in this category.
        </p>
      )}
    </div>
  );
}
