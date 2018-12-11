#!/usr/bin/env bash
echo "start build wasm"
cd ./astate/
sh ./build.sh

echo "start build js"
cd ../www
npm install
npm run build

echo "start webserver"
npm start
