# iot-raspi-sensors

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

IoT container for Raspberry Pi used to measure temperature and humidity.
 
For storing measurement data, it consumes [IoT server](https://github.com/mmontes11/iot-server) REST API via [IoT client](https://github.com/mmontes11/iot-client).

It also has a lightweight socket server for providing real time sensor data.

### Components

* [DHT11](https://www.adafruit.com/product/386)
* [DS18B20](https://www.adafruit.com/product/381)
* 4 x 220Ω Resistor
* 3 x LED

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

### Build sensors image

Configuration:

* [crontab](https://github.com/mmontes11/iot-raspi-sensors/blob/develop/scripts/crontab)

```bash
$ npm run build
$ docker build -t iot-raspi-sensors .
```

### Build server image

```bash
$ npm run build
$ docker build -t iot-raspi-sensors-server -f Dockerfile.server .
```

### DockerHub

Images available on [Docker Hub](https://hub.docker.com/):

* [iot-raspi-sensors](https://hub.docker.com/r/mmontes11/iot-raspi-sensors/)
* [iot-raspi-sensors-server](https://hub.docker.com/r/mmontes11/iot-raspi-sensors-server/)


### Production

Configuration:
* Create a `.env` file with this [variables](https://github.com/mmontes11/iot-raspi-sensors/blob/develop/src/config/production.js)

```bash
$ ./run-production.sh
```

```bash
$ ./run-production-server.sh
```
