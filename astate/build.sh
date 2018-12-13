#!/usr/bin/env bash
rm -rf pkg
wasm-pack build
cd pkg
cp ../src/owl.js ./
npm link
