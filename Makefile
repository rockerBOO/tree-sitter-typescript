build:
	yarn build

test: generate
	yarn test

build_parser: build 
	cc -o ./build/typescript/parser.so -I./src/typescript/ typescript/src/parser.c typescript/src/scanner.c -shared -Os -lstdc++ -fPIC
	cc -o ./build/tsx/parser.so -I./src/tsx/ tsx/src/parser.c tsx/src/scanner.c -shared -Os -lstdc++ -fPIC

