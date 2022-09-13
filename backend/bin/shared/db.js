// @ts-check
import postgres from "postgres";
export const sql = postgres(
	"postgresql://postgres:postgres@localhost:54322/postgres",
);
