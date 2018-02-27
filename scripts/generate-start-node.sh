#!/usr/bin/env bash

NODE_ENV=production;
NODE_PATH=/usr/local/bin
WORKDIR=/usr/src/iot-raspi-sensors
SCRIPT=$WORKDIR/start-node.sh

shebang="#!/usr/bin/env bash";
node_env="export NODE_ENV=$NODE_ENV;\n"
iot_env=$(printenv | sed 's/^\(.*\)$/export \1/g' | grep -E '^export IOT' | awk '{ printf("%s;\\n", $0) }')
env=$node_env$iot_env;
run="$NODE_PATH/node $WORKDIR/index.js";

start_node=$shebang$"\n\n"$env$"\n\n"$run;
echo -e $start_node > $SCRIPT
chmod +x $SCRIPT