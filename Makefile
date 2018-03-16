down:
	docker-compose down

build-docker:
	docker-compose build

setup: build-docker

test:
	docker-compose run --rm web yarn test

serve:
	docker-compose run --rm --service-ports web

storybook:
	docker-compose run --rm --service-ports storybook