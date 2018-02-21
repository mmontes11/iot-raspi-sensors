#!/usr/bin/env bash

export PATH='/usr/local/bin';
export WOKRDIR='/usr/src/iot-raspi';
export NODE_ENV='production';
export IOT_SERVER='http://localhost:8000';
export IOT_USERNAME='admin';
export IOT_PASSWORD='aA12345678&';
export IOT_DEBUG='true';
export IOT_RASPI_LONGITUDE=-8.40;
export IOT_RASPI_LATITUDE=43.40;
export IOT_RASPI_SUCCESS_LED_GPIO=20;
export IOT_RASPI_ERROR_LED_GPIO=21;
export IOT_RASPI_LED_BLINK_DURATION_IN_MS=100;
export IOT_RASPI_LED_BLINK_TOTAL_IN_MS=5000;
export IOT_RASPI_DHT_TYPE=11;
export IOT_RASPI_DHT_GPIO=24;

node ${WOKRDIR}/index.js