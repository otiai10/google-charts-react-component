
clean:
	rm -rf dist
	rm -rf demo/build

dist:
	pnpm build

publish: clean dist
	pnpm publish --access public

ROOT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
demo/build:
	cd demo && pnpm install && pnpm build && cd $(ROOT_DIR)
