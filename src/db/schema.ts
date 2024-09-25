import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

import { sql } from "drizzle-orm";

export const profile = sqliteTable("profile", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  imageUrl: text("image_url"),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

export const categories = [
  "clothing",
  "shoes",
  "accessories",
  "home",
  "beauty",
] as const;

export const products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description"),
  price: integer("price").notNull(), // Store price in cents
  stock: integer("stock").notNull().default(0),
  sizes: text("sizes"), // Store as JSON string, e.g., '["S", "M", "L"]'
  category: text("category", { enum: categories }).notNull(),
  imageUrl: text("image_url"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

export const orders = sqliteTable("orders", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id")
    .notNull()
    .references(() => profile.id),
  status: text("status", {
    enum: ["pending", "processing", "shipped", "delivered"],
  }).notNull(),
  totalAmount: integer("total_amount").notNull(), // Store total in cents
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

export const orderItems = sqliteTable("order_items", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  orderId: integer("order_id")
    .notNull()
    .references(() => orders.id),
  productId: integer("product_id")
    .notNull()
    .references(() => products.id),
  quantity: integer("quantity").notNull(),
  price: integer("price").notNull(), // Store price in cents
});
