#!/usr/bin/env bash

rsyslogd
/usr/src/iot-raspi/scripts/generate-start-node.sh
cron
touch /var/log/cron.log
tail -F /var/log/syslog /var/log/cron.log
