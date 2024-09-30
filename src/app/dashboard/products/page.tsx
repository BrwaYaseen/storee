"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart, Plus, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
}

export default function ProductInputPage() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Classic Cotton T-Shirt",
      description: "Comfortable and stylish",
      price: 29.99,
      category: "Clothing",
      stock: 100,
    },
    {
      id: "2",
      name: "Leather Wallet",
      description: "Genuine leather bifold wallet",
      price: 39.99,
      category: "Accessories",
      stock: 50,
    },
    {
      id: "3",
      name: "Wireless Earbuds",
      description: "High-quality sound with long battery life",
      price: 99.99,
      category: "Electronics",
      stock: 30,
    },
  ]);

  const [newProduct, setNewProduct] = useState<Omit<Product, "id">>({
    name: "",
    description: "",
    price: 0,
    category: "",
    stock: 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: name === "price" || name === "stock" ? parseFloat(value) : value,
    }));
  };

  const handleCategoryChange = (value: string) => {
    setNewProduct((prev) => ({ ...prev, category: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = (products.length + 1).toString();
    setProducts((prev) => [...prev, { ...newProduct, id }]);
    setNewProduct({
      name: "",
      description: "",
      price: 0,
      category: "",
      stock: 0,
    });
  };

  const handleDelete = (id: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <header className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <ShoppingCart className="h-6 w-6" />
            <span className="font-bold text-xl">ShopEase</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Dashboard
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Orders
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Customers
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Product Management</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-800 text-white">
            <CardHeader>
              <CardTitle>Add New Product</CardTitle>
              <CardDescription className="text-gray-400">
                Enter the details of the new product
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-700 text-white border-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-700 text-white border-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-700 text-white border-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    onValueChange={handleCategoryChange}
                    value={newProduct.category}
                  >
                    <SelectTrigger className="bg-gray-700 text-white border-gray-600">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 text-white border-gray-600">
                      <SelectItem value="Clothing">Clothing</SelectItem>
                      <SelectItem value="Electronics">Electronics</SelectItem>
                      <SelectItem value="Accessories">Accessories</SelectItem>
                      <SelectItem value="Home & Living">
                        Home & Living
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stock">Stock</Label>
                  <Input
                    id="stock"
                    name="stock"
                    type="number"
                    value={newProduct.stock}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-700 text-white border-gray-600"
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Plus className="w-4 h-4 mr-2" /> Add Product
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 text-white">
            <CardHeader>
              <CardTitle>Existing Products</CardTitle>
              <CardDescription className="text-gray-400">
                Manage your current product inventory
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-white">Name</TableHead>
                      <TableHead className="text-white">Price</TableHead>
                      <TableHead className="text-white">Category</TableHead>
                      <TableHead className="text-white">Stock</TableHead>
                      <TableHead className="text-white">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">
                          {product.name}
                        </TableCell>
                        <TableCell>${product.price.toFixed(2)}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Pencil className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDelete(product.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
