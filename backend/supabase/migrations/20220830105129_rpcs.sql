SET check_function_bodies = OFF;

CREATE OR REPLACE FUNCTION public.__geojson_from_geometry (geom geometry)
	RETURNS TABLE (
		geojson json)
	LANGUAGE plpgsql
	AS $function$
BEGIN
	RETURN query
	SELECT
		jsonb_build_object('type', 'Feature', 'geometry', st_asgeojson (geom)::json)::json;
END;
$function$;

CREATE OR REPLACE FUNCTION public.__rpc_trees_by_district (district_id integer)
	RETURNS TABLE (
		id integer,
		type text,
		geojson json,
		age integer,
		height double precision)
	LANGUAGE plpgsql
	AS $function$
BEGIN
	RETURN query
	SELECT
		trees.id,
		trees.type,
		public.__geojson_from_geometry (trees.geom) AS geojson,
		trees.age,
		trees.height
	FROM
		public.trees
		JOIN public.districts ON st_contains ((
			SELECT
				districts.geom
			FROM districts
			WHERE
				districts.id = district_id), trees.geom);
END;
$function$;

CREATE OR REPLACE FUNCTION public.__rpc_trees_within_radius (lon double precision, lat double precision, distance double precision)
	RETURNS TABLE (
		id integer,
		type text,
		geojson json,
		age integer,
		height double precision)
	LANGUAGE plpgsql
	AS $function$
BEGIN
	RETURN query
	SELECT
		t.id,
		t. "type",
		public.__geojson_from_geometry (t.geom) AS geojson,
		t.age,
		t.height
	FROM
		trees t
	WHERE
		st_dwithin (t.geom::geography, st_setsrid (st_makepoint (lon, lat), 4326)::geography, distance, FALSE);
END;
$function$;

