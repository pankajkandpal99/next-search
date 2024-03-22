import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const connector = neon(process.env.DATABASE_URL!); // Here, ! indicates that DATABASE_URL will never be null..
export const db = drizzle(connector);
