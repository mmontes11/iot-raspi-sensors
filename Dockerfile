FROM node:8

RUN apt-get update

RUN apt-get install -y cron rsyslog

ENV WORKDIR /usr/src/iot_raspi

RUN mkdir ${WORKDIR}

WORKDIR ${WORKDIR}

COPY . ${WORKDIR}

RUN chmod +x ${WORKDIR}/config/install_bcm.sh

RUN ${WORKDIR}/config/install_bcm.sh

RUN npm install

RUN npm run transpile-client && npm run transpile

RUN crontab ${WORKDIR}/config/crontab

RUN chmod +x ${WORKDIR}/config/start_cron.sh

CMD ${WORKDIR}/config/start_cron.sh