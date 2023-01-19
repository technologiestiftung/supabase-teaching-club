drop materialized view if exists "public"."trees_with_district";

alter table "public"."trees" drop column "type";

alter table "public"."trees" add column "tree_type" text not null;

create materialized view "public"."trees_with_district" as  SELECT trees.id AS tree_id,
    trees.tree_type,
    trees.geom AS tree_geom,
    trees.height AS tree_height,
    trees.age AS tree_age,
    districts.name AS district_name,
    districts.id AS district_id
   FROM (trees
     JOIN districts ON (st_contains(districts.geom, trees.geom)));



