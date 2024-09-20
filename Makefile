
clean:
	rm -rf dist

dist:
	pnpm build

publish: clean dist
	pnpm publish --access public
