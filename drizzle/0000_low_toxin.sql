CREATE TABLE `order_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`order_id` integer NOT NULL,
	`product_id` integer NOT NULL,
	`quantity` integer NOT NULL,
	`price` integer NOT NULL,
	FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `orders` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`status` text NOT NULL,
	`total_amount` integer NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP,
	`updated_at` integer DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (`user_id`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`price` integer NOT NULL,
	`stock` integer DEFAULT 0 NOT NULL,
	`sizes` text,
	`category` text NOT NULL,
	`image_url` text,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP,
	`updated_at` integer DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE `profile` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`image_url` text,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP
);
