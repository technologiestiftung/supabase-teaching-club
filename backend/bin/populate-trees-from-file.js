// @ts-check
import { sql } from "./shared/db.js";

import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const result = await sql.file(resolve(__dirname, "./trees.sql"));
console.info(result);
await sql.end();
