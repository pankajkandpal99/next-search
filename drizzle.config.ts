import type { Config } from "drizzle-kit";

export default {
  driver: "pg",
  schema: "./src/db/schema.ts",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!, // Here, ! indicates that DATABASE_URL will never be null..
  },
  out: "./drizzle",
} satisfies Config;
