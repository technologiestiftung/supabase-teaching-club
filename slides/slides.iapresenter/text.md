Topics:

- Prerequisites
	- Docker 
	- Git
	- [supabase-cli](https://supabase.com/docs/reference/cli/introduction)
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


---
- How to add new features to the database (migrations)
	- Create tables
	- Create remote procedure calls (rpc aka sql functions) 
- How to deploy changes to production/staging using GitHub Actions