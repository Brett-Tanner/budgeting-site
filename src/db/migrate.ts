import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { db } from "./client";

async function runMigrations() {
  await migrate(db, { migrationsFolder: "src/db/migrations" });
}

runMigrations();
