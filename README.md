# Supabase Teaching Club Material
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

This repo contains source code for a teaching club showing of features of [Supabase](https://supabase.com). The folder `./backend` has all the migrations and code for a local supabase instance. The folder `./frontend` contains a react app that uses the supabase client to interact with the database. The whole application is a crude clone of giessdenkiez.de.

## Topics for the course

### @julizet

- Prerequisites
	- Docker 
	- Git
  - Mapbox Account and Token
  - Supabase Account
	- [supabase-cli](https://supabase.com/docs/reference/cli/introduction)
  - [just](https://just.systems/) (optional as command runner)
- What to do when I find a Supabase folder in a repo
	- How to start
	- How to find credentials (ANON_KEY, SERVICE_ROLE_KEY)
	- Which services are included:
		- What are the services
			- Kong
			- Postgres ★
			- Postgrest ★
			- pg-meta ★
			- GoTrue
			- Realtime
			- Functions
			- inbucket
			- Storage
		- Where are the services (which ports)
		- How to create and use Typescript type definitions from the database

### @ff6347

- How to add new features to the database (migrations)
	- Create tables
	- Create remote procedure calls (rpc aka sql functions) 
- How to deploy changes to production/staging using GitHub Actions

## Setup

- Clone the repo `git clone git@github.com:technologiestiftung/supabase-teaching-club.git`
- Move into it `cd technologiestiftung/supabase-teaching-club`
- Setup the backend:
  - `cd backend`
  - `supabase start`
  - Install your dependencies `npm ci`
  - Run your some seeding scripts (these are to large for the seed.sql from supabase):
    - `just populate-districts` (populates the districts table from geojson)
    - `just populate-trees` (populates the trees table from sql)
    - `just refresh-materialized` (refreshes the materialized views)



- Setup the frontend:
  - From the output of `supabase status` copy the `anon key`
  - Create your `.env.local` file. `cd frontend && cp .env.example .env.local`
  - Add the `anon key` to your `.env.local`
  - Add a Mapbox token to `.env.local`
  - Install your dependencies `npm ci`
  - Run the Next.js application `npm run dev`
  - Use the detail toggle to signup for a new account
  - Browse the trees

  


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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/julizet"><img src="https://avatars.githubusercontent.com/u/52455010?v=4?s=100" width="100px;" alt="Julia Zet"/><br /><sub><b>Julia Zet</b></sub></a><br /><a href="https://github.com/technologiestiftung/supabase-teaching-club/pulls?q=is%3Apr+reviewed-by%3Ajulizet" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://fabianmoronzirfas.me"><img src="https://avatars.githubusercontent.com/u/315106?v=4?s=100" width="100px;" alt="Fabian Morón Zirfas"/><br /><sub><b>Fabian Morón Zirfas</b></sub></a><br /><a href="https://github.com/technologiestiftung/supabase-teaching-club/commits?author=ff6347" title="Documentation">📖</a> <a href="#design-ff6347" title="Design">🎨</a> <a href="https://github.com/technologiestiftung/supabase-teaching-club/commits?author=ff6347" title="Code">💻</a> <a href="#infra-ff6347" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#research-ff6347" title="Research">🔬</a> <a href="#ideas-ff6347" title="Ideas, Planning, & Feedback">🤔</a> <a href="#tutorial-ff6347" title="Tutorials">✅</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!