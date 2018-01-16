# iot_raspi
IoT container for Raspberry Pi used to measure temperature and humidity periodically. For storing measurement data, it consumes [IoT backend](https://github.com/mmontes11/iot_backend) REST API using [IoT client](https://github.com/mmontes11/iot_client).

### Run in development

```bash
$ npm install 
$ npm start
```
### Build image
First, configure your image:
* [raspi config file](https://github.com/mmontes11/iot_raspi/blob/develop/src/config/raspi.js)
* [crontab file](https://github.com/mmontes11/iot_raspi/blob/develop/scripts/crontab)

After that, run the commands below:
```bash
$ npm run dist
$ docker build -t iot_raspi .
```
### Run image
```bash
$ docker run --name iot_raspi --privileged --restart always -h $(hostname) -d iot_raspi
```
