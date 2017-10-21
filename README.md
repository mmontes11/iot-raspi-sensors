# iot_raspi
IoT container for Raspberry Pi that uses [IoT client](https://github.com/mmontes11/iot_client)

### Prerequisites
Install [Docker](https://docs.docker.com/engine/installation/)

### Installing
```bash
$ git clone https://github.com/mmontes11/iot_raspi.git --recursive
$ cd iot_raspi
$ docker build -t iot_raspi .
$ docker run --name iot_raspi --privileged --restart always -h $(hostname) -d iot_raspi
```
