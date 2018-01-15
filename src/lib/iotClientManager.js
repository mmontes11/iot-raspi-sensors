import _ from 'underscore';

export class IoTClientManager {
    static create(host, username, password) {
        const folder = _.isEqual(process.env.NODE_ENV, 'production') ? 'dist' : 'src';
        const IoTClient = require(`./iot_client/${folder}/index`);
        return new IoTClient({
            host,
            username,
            password
        });
    }
}