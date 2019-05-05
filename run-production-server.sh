#!/usr/bin/env bash

docker run --name iot-raspi-sensors-server --privileged --restart always --env-file .env -p 8080:8080/tcp -h $(hostname) -d mmontes11/iot-raspi-sensors-server
