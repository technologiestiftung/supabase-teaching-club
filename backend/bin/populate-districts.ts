// @ts-check
import { sql } from "./_shared/db";
import bezirksgrenzen from "../data/bezirksgrenzen.geo.json" assert { type: "json" };

const statements = bezirksgrenzen.features.map(async (feature) => {
	const properties = feature.properties;
	const geom = feature.geometry;
	await sql`insert into districts (name, geom) values(${
		properties["Gemeinde_name"]
	}, ST_GeomFromGeoJSON(${JSON.stringify(geom)}))`;
});

const results = await Promise.all(statements);
console.info(results);
await sql.end();
