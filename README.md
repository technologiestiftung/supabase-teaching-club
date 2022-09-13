# Supabase Teaching Club Material

This repo contains source code for a teaching club showing of features of [Supabase](https://supabase.com). The folder `./backend` has all the migrations and code for a local supabase instance. The folder `./frontend` contains a react app that uses the supabase client to interact with the database. The whole application is a crude clone of giessdenkiez.de.

## Learnings while setting this up

- How to do spatial joins/spatial queries
  - Trees within districts (as materialized view since rpc takes too long)
  - Trees within range of a user
- Supabase already converts Postgis geometry to geojson \o/ Yay!
- GDK was setup super complex, we can do better
- Migrations can be tricky and need a review (took me a day fix a bug)
  - migra migrations are superior to the default diff
- Frontend needs so much work. Way more then the backend
- Frontend devs. Please review:
  - @supabase/auth-helpers-nextjs
  - @supabase/supabase-auth-helpers
  - @supabase/ui
