import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ShoppingCart,
  Truck,
  ArrowRight,
  Package,
  CheckCircle,
} from "lucide-react";

export default function UpgradedThankYouPage() {
  const orderDetails = {
    orderNumber: "ORD-12345-ABCDE",
    date: "June 15, 2023",
    total: 129.99,
    items: [
      { name: "Classic Cotton T-Shirt", quantity: 2, price: 29.99 },
      { name: "Leather Wallet", quantity: 1, price: 39.99 },
      { name: "Wireless Earbuds", quantity: 1, price: 29.99 },
    ],
    estimatedDelivery: "June 20 - June 22, 2023",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Thank You for Your Order!
            </h1>
            <p className="text-xl text-gray-600">
              Your order has been received and is being processed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="md:order-2">
              <CardHeader>
                <CardTitle className="text-xl">Order Summary</CardTitle>
                <CardDescription>
                  Order details and delivery information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Order Number:</span>
                  <span className="text-blue-600">
                    {orderDetails.orderNumber}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Order Date:</span>
                  <span>{orderDetails.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total:</span>
                  <span className="text-lg font-bold">
                    ${orderDetails.total.toFixed(2)}
                  </span>
                </div>
                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-2">Items:</h3>
                  <ul className="space-y-2">
                    {orderDetails.items.map((item, index) => (
                      <li key={index} className="flex justify-between text-sm">
                        <span>
                          {item.name} x {item.quantity}
                        </span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full flex items-center justify-center space-x-2 text-green-600 bg-green-50 py-2 rounded-md">
                  <Truck className="h-5 w-5" />
                  <span className="text-sm font-medium">
                    Estimated Delivery: {orderDetails.estimatedDelivery}
                  </span>
                </div>
              </CardFooter>
            </Card>

            <div className="md:order-1 space-y-6">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Thank+You"
                  alt="Thank you illustration"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4">
                    We appreciate your business and hope you enjoy your
                    purchase. If you have any questions or concerns, please
                    don't hesitate to contact our customer support team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="flex-1">
                      <Link
                        href="/track-order"
                        className="flex items-center justify-center"
                      >
                        <Package className="mr-2 h-4 w-4" /> Track Your Order
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <Link
                        href="/products"
                        className="flex items-center justify-center"
                      >
                        Continue Shopping{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
