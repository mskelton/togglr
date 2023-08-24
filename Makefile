db:
	docker-compose up -d

api: db
	cd api && air

web: db
	cd web && pnpm dev

dev: db api web

redis-cli:
	docker exec -it togglr-redis redis-cli

postgres-cli:
	docker exec -it togglr-postgres psql -U togglr
