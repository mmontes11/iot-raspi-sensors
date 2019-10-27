FROM node:8

RUN apt-get update

RUN apt-get install -y cron rsyslog

ENV WORKDIR /usr/src/iot-raspi-sensors

RUN mkdir ${WORKDIR}

WORKDIR ${WORKDIR}

ADD scripts/ ${WORKDIR}

RUN chmod +x ${WORKDIR}/*.sh

RUN ${WORKDIR}/install-bcm.sh

COPY package*.json ${WORKDIR}/

RUN npm install --production

ADD dist/ ${WORKDIR}

RUN crontab ${WORKDIR}/crontab

CMD ${WORKDIR}/start.sh