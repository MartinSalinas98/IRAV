# IRAV
A respository for IRAV projects.

Start (Dockerfile level):
docker compose up

Stop:
docker compose down

Build:
docker compose build

Clean cache:
docker system prune -a -f

Comando profesor (limpia y build de nuevo):
docker compose down && docker compose build && docker compose up

Abrir terminal una vez existe la imagen (aunque se cierre):
docker run --interactive --tty --entrypoint /bin/sh p1-irav-server:latest