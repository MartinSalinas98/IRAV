# IRAV
A respository for IRAV projects.

Start (Dockerfile level):
docker compose up

Stop:
docker compose down

Build:
docker compose build

Clean cache:
docker system prune -a

Comando profesor (limpia y build de nuevo):
docker comose down && docker compose build && docker compose up