DROP FUNCTION IF EXISTS "public"."__rpc_trees_within_radius" (lon double precision, lat double precision, distance double precision);

SET check_function_bodies = OFF;

CREATE OR REPLACE FUNCTION public.__rpc_trees_within_district (district_id integer)
	RETURNS TABLE (
		id integer,
		type text,
		geom geometry,
		age integer,
		height double precision)
	LANGUAGE plpgsql
	AS $function$
BEGIN
	RETURN query
	SELECT
		trees.id,
		trees.type,
		trees.geom,
		trees.age,
		trees.height
	FROM
		public.trees
		JOIN "public".districts ON st_contains ((
			SELECT
				districts.geom
				WHERE
					districts.id = district_id), trees.geom);
END;
$function$;

CREATE OR REPLACE FUNCTION public.__rpc_trees_within_radius (lon double precision, lat double precision, distance double precision)
	RETURNS TABLE (
		id integer,
		type text,
		geom geometry,
		age integer,
		height double precision)
	LANGUAGE plpgsql
	AS $function$
BEGIN
	RETURN query
	SELECT
		t.id,
		t. "type",
		t.geom,
		t.age,
		t.height
	FROM
		trees t
	WHERE
		st_dwithin (t.geom::geography, st_setsrid (st_makepoint (lon, lat), 4326)::geography, distance, FALSE);
END;
$function$;

-- trigger the function every time a user is created
CREATE TRIGGER on_auth_user_created
	AFTER INSERT ON auth.users FOR EACH ROW
	EXECUTE PROCEDURE public.handle_new_user ();

