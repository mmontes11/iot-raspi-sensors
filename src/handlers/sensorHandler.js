import Promise from 'bluebird';
import _ from 'underscore';
import config from '../config/raspi';
import { MeasurementList, TemperatureMeasurement, HumidityMeasurement } from '../models/measurement';
import { Log } from '../util/log';

export class SensorHandler {
    static async read() {
        try {
            const readFromSensorPromises = _.map(config.sensors, (sensor) => {
                return sensor.read().reflect();
            });
            let measurements = [];
            await Promise.all(readFromSensorPromises)
                .each((inspection, index) => {
                    const sensor = config.sensors[index];
                    if (inspection.isFulfilled()) {
                        Log.logInfo(`Reading from ${sensor} ...`);
                        const { temperatureValue, humidityValue } = inspection.value();
                        if (!_.isUndefined(temperatureValue)) {
                            const temperatureMeasurement = new TemperatureMeasurement(temperatureValue, sensor.temperatureUnits, sensor.measurementLocation);
                            Log.logInfo(`${temperatureMeasurement}`);
                            measurements.push(temperatureMeasurement);
                        }
                        if (!_.isUndefined(humidityValue)) {
                            const humidityMeasurement = new HumidityMeasurement(humidityValue, sensor.humidityUnits, sensor.measurementLocation);
                            Log.logInfo(`${humidityMeasurement}`);
                            measurements.push(humidityMeasurement);
                        }
                    } else {
                        Log.logError(`Error reading from ${sensor}: ${inspection.reason()}`)
                    }
                });
            return new MeasurementList(measurements);
        } catch (err) {
            throw err;
        }
    }
}
