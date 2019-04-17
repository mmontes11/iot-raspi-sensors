#!/usr/bin/env bash

docker run --name iot-raspi-sensors-server --privileged --restart always --env-file .env -p 8080:8080/tcp -d iot-raspi-sensors-server