import winston from '../lib/winston';
import config from '../config/raspi';

export class Log {
    static logInfo(message) {
        if (config.debug) {
            winston.info(message);
        }
    }
    static logError(message) {
        if (config.debug) {
            winston.error(message);
        }
    }
}