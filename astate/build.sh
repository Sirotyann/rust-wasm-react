#!/usr/bin/env bash
wasm-pack build
cd pkg
cp ../src/owl.js ./
npm link