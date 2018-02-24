# iot-raspi-sensors
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

IoT container for Raspberry Pi used to measure temperature and humidity periodically. 
For storing measurement data, it consumes [IoT backend](https://github.com/mmontes11/iot-backend) REST API via [IoT client](https://github.com/mmontes11/iot-client).

### Supported sensors

* [DHT11](https://www.adafruit.com/product/386)
* [DHT22](https://www.adafruit.com/product/385)
* [DS18B20](https://www.adafruit.com/product/381)

### Wiring

![wiring](https://raw.githubusercontent.com/mmontes11/iot-raspi-sensors/develop/wiring/wiring.png)

### Run in development

```bash
$ npm start
```

### Build image

Configure your image:

* [crontab](https://github.com/mmontes11/iot-raspi-sensors/blob/develop/scripts/crontab)

```bash
$ npm run dist
$ docker build -t iot-raspi .
```

### DockerHub
Image available on [Docker Hub](https://hub.docker.com/r/mmontes11/iot-raspi-sensors/)

### Run image
Configure env variables:
* [.env](https://github.com/mmontes11/iot-raspi-sensors/blob/develop/.env)


```bash
$ docker run --name iot-raspi-sensors --privileged --restart always --env-file .env -h $(hostname) -d mmontes11/iot-raspi-sensors
```
