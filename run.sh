#!/usr/bin/env bash
echo "start build wasm"
cd ./astate/
sh ./build.sh

echo "start build js"
cd ../www
rm -rf ./wasm
mkdir wasm
cp ../astate/pkg/*.js ./wasm
cp ../astate/pkg/*.ts ./wasm
cp ../astate/pkg/*.wasm ./wasm
npm installs
npm run build

echo "start webserver"
npm start
