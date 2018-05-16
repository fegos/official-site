#!/bin/bash

#help
usage(){
   echo "usage: $0 start | restart | stop | exit [local|online|test2]"
}

if [ $# -lt 1 ]; then
    usage;
    exit
fi

pushd `dirname $0`
serverName="fe-server"

# 默认发布的环境
serverEnv="online"

if [ $# -eq 2 ]; then
    serverEnv=$2
fi

eggscript=node_modules/egg-scripts/bin/egg-scripts

#start
start(){
    echo "start server ..."
    out=`exec node $eggscript start --daemon --env=$1 --title=$2`
    echo $out
    echo "start server end"
}

#stop
stop(){
    echo "stop server..."
    out=`exec node $eggscript stop --env=$1 --title=$2`
    echo $out
}

#restart
restart(){
    echo "restart server ... "
    out=`stop $1 $2`
    echo $out
    start $1 $2
}

if [ $1 = "start" ]; then
    start $serverEnv $serverName
elif [ $1 = "restart" ] ; then
    restart $serverEnv $serverName
elif [ $1 = "stop" ] ; then
    stop $serverEnv $serverName
else
    echo "unknown command"
    usage
fi
popd
