FROM node:8

ENV WORKDIR /usr/src/iot_raspi

RUN mkdir ${WORKDIR}

WORKDIR ${WORKDIR}

ENV BCM bcm2835-1.52

RUN wget http://www.airspayce.com/mikem/bcm2835/${BCM}.tar.gz

WORKDIR ${BCM}

RUN ./configure && make

RUN make check && make install

WORKDIR ${WORKDIR}

COPY package.json ${WORKDIR}

RUN npm install && npm run transpile

COPY . ${WORKDIR}