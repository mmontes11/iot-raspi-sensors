#!/usr/bin/env bash

NODE_ENV=production;
NODE_PATH=/usr/local/bin
WORKDIR=/usr/src/iot-raspi
SCRIPTSDIR=$WORKDIR/scripts
SCRIPT=$SCRIPTSDIR/start_node.sh

newline="\n\n";
shebang="#!/usr/bin/env bash";

node_env="export NODE_ENV=$NODE_ENV;\n";
iot_env=$(printenv | sed 's/^\(.*\)$/export \1/g' | grep -E '^export IOT' | awk '{ printf("%s;\\n", $0) }')
env=$node_env$iot_env;

run="$NODE_PATH/node $WORKDIR/index.js";

start_node=$shebang$newline$env$newline$run;

echo -e $start_node > $SCRIPT