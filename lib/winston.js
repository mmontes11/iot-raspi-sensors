import winston from 'winston';

winston.remove(winston.transports.Console);

winston.add(winston.transports.Console, {
    timestamp: false,
    json: false,
    colorize: true
});
winston.add(winston.transports.File, {
    timestamp: true,
    json: false,
    colorize: true,
    filename: 'log_iot_raspi.log'
});

export default winston;