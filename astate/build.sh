#!/usr/bin/env bash
rm -rf pkg
wasm-pack build
cd pkg
cp ../src/owl.js ./
npm link
cp ./*.js ../../www/wasm/
cp ./*.ts ../../www/wasm/
cp ./*.wasm ../../www/wasm/
