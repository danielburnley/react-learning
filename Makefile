down:
	docker-compose down

build-docker:
	docker-compose build

setup: build-docker

test: down build-docker
	docker-compose run --rm web yarn test

serve: down build-docker
	docker-compose run --rm --service-ports web
