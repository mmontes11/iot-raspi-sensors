# iot-raspi
IoT container for Raspberry Pi used to measure temperature and humidity periodically. For storing measurement data, it consumes [IoT backend](https://github.com/mmontes11/iot-backend) REST API using [IoT client](https://github.com/mmontes11/iot_client).

### Wiring

Check wiring info at [raspi](https://github.com/mmontes11/iot-raspi/blob/develop/src/config/raspi.js)

### Run in development

```bash
$ npm install 
$ npm start
```
### Build image
First, configure your image:
* [raspi](https://github.com/mmontes11/iot-raspi/blob/develop/src/config/raspi.js)
* [crontab](https://github.com/mmontes11/iot-raspi/blob/develop/scripts/crontab)

After that, run the commands below:
```bash
$ npm run dist
$ docker build -t iot-raspi .
```
### Run image
```bash
$ docker run --name iot-raspi --privileged --restart always -h $(hostname) -d iot-raspi
```
