# iot-raspi-sensors

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

IoT container for Raspberry Pi used to measure temperature and humidity periodically. 
For storing measurement data, it consumes [IoT server](https://github.com/mmontes11/iot-server) REST API via [IoT client](https://github.com/mmontes11/iot-client).

### Components

* [DHT11](https://www.adafruit.com/product/386)
* [DS18B20](https://www.adafruit.com/product/381)
* 3 x 220Ω Resistor
* 2 x LED

### Wiring

![wiring](https://raw.githubusercontent.com/mmontes11/iot-raspi-sensors/develop/wiring/wiring.png)

### Development

```bash
$ npm start
```

### Lint

```bash
$ npm run lint
```

### Build Image

Configuration:

* [crontab](https://github.com/mmontes11/iot-raspi-sensors/blob/develop/scripts/crontab)

```bash
$ npm run build
$ docker build -t iot-raspi-sensors .
```

### DockerHub

Image available on [Docker Hub](https://hub.docker.com/r/mmontes11/iot-raspi-sensors/)

### Production

Configuration:

* [.env](https://github.com/mmontes11/iot-raspi-sensors/blob/develop/.env)


```bash
$ ./run-production.sh
```
