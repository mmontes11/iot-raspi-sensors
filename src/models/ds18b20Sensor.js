import Promise from 'bluebird';
import _ from 'underscore';
import ds18b20Lib from 'ds18b20';

export class DS18B20Sensor {
    constructor(temperatureUnits, measurementLocation) {
        this.temperatureUnits = temperatureUnits;
        this.measurementLocation = measurementLocation;
    }
    toString() {
        return `DS18B20_${this.measurementLocation}`
    }
    read() {
        return new Promise((resolve, reject) => {
            ds18b20Lib.sensors((err, ids) => {
                if (!_.isUndefined(err)) {
                    reject(err);
                } else {
                    const sensorID = _.first(ids);
                    ds18b20Lib.temperature(sensorID, (err, temperatureValue) => {
                        if (!_.isUndefined(err)) {
                            reject(err);
                        } else {
                            resolve({
                                temperatureValue
                            });
                        }
                    });
                }
            });
        });
    }
}