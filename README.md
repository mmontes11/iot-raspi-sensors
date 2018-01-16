# iot_raspi
IoT container for Raspberry Pi used to measure temperature and humidity. It consumes [IoT backend](https://github.com/mmontes11/iot_backend) API using [IoT client](https://github.com/mmontes11/iot_client).

### Run in development

```bash
$ npm install 
$ npm start
```
### Build image
```bash
$ npm run dist
$ docker build -t iot_raspi .
```
### Run image
```bash
$ docker run --name iot_raspi --privileged --restart always -h $(hostname) -d iot_raspi
```
