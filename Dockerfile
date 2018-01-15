FROM node:8

RUN apt-get update
RUN apt-get install -y cron rsyslog

ENV WORKDIR /usr/src/iot_raspi

RUN mkdir ${WORKDIR}
ADD dist/ ${WORKDIR}
COPY scripts/ ${WORKDIR}
WORKDIR ${WORKDIR}

RUN chmod +x ${WORKDIR}/script/install_bcm.sh
RUN ${WORKDIR}/script/install_bcm.sh

RUN crontab ${WORKDIR}/script/crontab
RUN chmod +x ${WORKDIR}/script/start_cron.sh
RUN chmod +x ${WORKDIR}/script/start_node.sh
CMD ${WORKDIR}/script/start_cron.sh