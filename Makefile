MAKEFILE_DIR := $(shell pwd)

start-image:
	@cd $(DIR); \
	docker compose up

stop-image:
	@cd $(DIR); \
	docker compose down

delete-image:
	@make -s stop-image DIR=$(DIR)
	cd $(DIR); \
	docker system prune -a -f

restart-image-clean:
	@make -s delete-image DIR=$(DIR); \
	make -s start-image DIR=$(DIR)