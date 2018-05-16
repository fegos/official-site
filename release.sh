#!/bin/bash
cd `dirname $0`
shellPath=`pwd`
nodegypPath=$shellPath'/node_modules/.bin/node-gyp'
echo $nodegypPath
pushd ./lib/addon
rm -rf build
echo "build c plugin..."
 gypresult=`$nodegypPath configure build`
echo $gypresult
echo "build c plugin complete"
popd
pushd ./server/lib/addon/
rm -rf *.node
popd
cp ./lib/addon/build/Release/*.node ./server/lib/addon/
