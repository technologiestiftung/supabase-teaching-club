import { sql } from "./_shared/db.js";

const res = await sql`REFRESH MATERIALIZED VIEW trees_with_district`;
console.info(res);
await sql.end();
