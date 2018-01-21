FROM node:8

RUN apt-get update

RUN apt-get install -y cron rsyslog

ENV WORKDIR /usr/src/iot-raspi

ENV SCRIPTSDIR ${WORKDIR}/scripts

RUN mkdir ${WORKDIR}

WORKDIR ${WORKDIR}

ADD dist/ ${WORKDIR}

RUN chmod +x ${SCRIPTSDIR}/*.sh

RUN ${SCRIPTSDIR}/install_bcm.sh

RUN crontab ${SCRIPTSDIR}/crontab

CMD ${SCRIPTSDIR}/start_cron.sh