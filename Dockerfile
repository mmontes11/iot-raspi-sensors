FROM node:8

ENV WORKDIR /usr/src/iot_raspi

ENV IOT_CLIENT_PATH lib/iot_client
ENV IOT_CLIENT_WORKDIR ${WORKDIR}/${IOT_CLIENT_PATH}
ENV IOT_BACKEND_PATH lib/iot_client/test/iot_backend
ENV IOT_BACKEND_WORKDIR ${WORKDIR}/${IOT_BACKEND_PATH}

RUN mkdir ${WORKDIR} && mkdir -p ${IOT_BACKEND_WORKDIR}

WORKDIR ${WORKDIR}

COPY install_bcm.sh ${WORKDIR}
RUN chmod +x ${WORKDIR}/install_bcm.sh

COPY package.json ${WORKDIR}
COPY ${IOT_CLIENT_PATH}/package.json ${IOT_CLIENT_WORKDIR}
COPY ${IOT_BACKEND_PATH}/package.json ${IOT_BACKEND_WORKDIR}

RUN ${WORKDIR}/install_bcm.sh

RUN npm install