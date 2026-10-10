CREATE TABLE `reviews` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`name` text NOT NULL,
	`rating` integer NOT NULL,
	`text` text NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	`hidden` integer DEFAULT false NOT NULL,
	`deleted` integer DEFAULT false NOT NULL,
	CONSTRAINT "reviews_rating_range" CHECK("reviews"."rating" between 1 and 5),
	CONSTRAINT "reviews_hidden_boolean" CHECK("reviews"."hidden" in (0, 1)),
	CONSTRAINT "reviews_deleted_boolean" CHECK("reviews"."deleted" in (0, 1))
);
--> statement-breakpoint
CREATE UNIQUE INDEX `reviews_user_id_unique` ON `reviews` (`user_id`);--> statement-breakpoint
CREATE INDEX `reviews_public_created_idx` ON `reviews` (`hidden`,`deleted`,`created_at`);