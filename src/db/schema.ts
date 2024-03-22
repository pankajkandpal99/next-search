import { doublePrecision, pgTable, text, timestamp } from "drizzle-orm/pg-core";

// This is the Schema for save data in database::
export const productsTable = pgTable("products", {
  id: text("id").primaryKey().default("uuid_generate_v4()"),
  name: text("name").notNull(),
  imageId: text("imageId").notNull(),
  price: doublePrecision("price").notNull(),
  description: text("description"),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export type Product = typeof productsTable.$inferSelect;     // '$inferSelect' ek generic type hai jo drizzle-orm ke saath aata hai aur database table ke columns ko infer karne mein madad karta hai. Is type ko typeof operator ke zariye retrieve kiya gaya hai, jisse Product type ke liye use kiya ja sakta hai.