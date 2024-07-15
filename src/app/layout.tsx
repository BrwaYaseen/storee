import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Created with Payload CMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" h-full">
      <body
        className={cn(
          " relative h-full font-sans antialiased",
          inter.className
        )}
      >
        <main className=" relative flex flex-col min-h-screen">
          <Providers>
            <Navbar />
            <div className=" scale-90 flex-grow flex-1">{children}</div>
          </Providers>
        </main>
      </body>
      <Toaster position="top-center" richColors />
    </html>
  );
}
