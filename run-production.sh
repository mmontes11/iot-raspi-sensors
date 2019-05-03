#!/usr/bin/env bash

docker run --name iot-raspi-sensors --privileged --restart always --env-file .env -h $(hostname) -d mmontes11/iot-raspi-sensors