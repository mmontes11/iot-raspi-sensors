#!/usr/bin/env bash

BCM_VERSION=1.58
BCM=bcm2835-${BCM_VERSION}

wget http://www.airspayce.com/mikem/bcm2835/${BCM}.tar.gz
tar zxvf ${BCM}.tar.gz
cd ${BCM}
./configure CFLAGS='-fPIC'
make
make check
make install
cd -