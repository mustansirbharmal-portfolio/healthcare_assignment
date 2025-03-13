import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

// SQL client for Drizzle ORM
const queryClient = postgres(process.env.DATABASE_URL);
export const db = drizzle(queryClient);

// For direct database access using postgres.js
export const sql = queryClient;
