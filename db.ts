import { Pool } from "pg";

export function connectDB() {
  return new Pool({
    user: "postgres",
    host: "localhost",
    port: 5432,
    database: "postgres",
    password: "09334270917",
  });
}