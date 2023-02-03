# iot-raspi-sensors

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

IoT container for Raspberry Pi used to measure temperature and humidity.
 
For storing measurement data, it consumes [IoT server](https://github.com/mmontes11/iot) REST API via [IoT client](https://github.com/mmontes11/iot).

It also has a lightweight socket server for providing real time sensor data.

### Components

* [DHT11](https://www.adafruit.com/product/386)
* [DS18B20](https://www.adafruit.com/product/381)
* 4 x 220Ω Resistor
* 3 x LED

### Sensor configuration

* [DHT11](https://www.raspberrypi-spy.co.uk/2017/09/dht11-temperature-and-humidity-sensor-raspberry-pi)
* [DS18B20](https://www.raspberrypi-spy.co.uk/2013/03/raspberry-pi-1-wire-digital-thermometer-sensor/)

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

### Production

Configuration:
* Create a `.env` file like [this one](./.env.example).

```bash
$ ./run-pro.sh
```
