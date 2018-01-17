import Promise from 'bluebird';
import config from '../config/raspi';
import { MeasurementList, TemperatureMeasurement, HumidityMeasurement } from '../models/measurement';
import { Log } from '../util/log';

export class DHTHandler {
    static async read() {
        try {
            const readFromSensorPromises = config.sensors.map((sensor) => {
                return sensor.read().reflect();
            });
            let measurements = [];
            await Promise.all(readFromSensorPromises)
                .each((inspection, index) => {
                    const sensor = sensors[index];
                    if (inspection.isFulfilled()) {
                        const { temperatureValue, humidityValue } = inspection.value();
                        const temperatureMeasurement = new TemperatureMeasurement(temperatureValue, sensor.temperatureUnits, sensor.measurementLocation);
                        const humidityMeasurement = new HumidityMeasurement(humidityValue, sensor.humidityUnits, sensor.measurementLocation);
                        Log.logInfo(`Reading from ${sensor} ...`);
                        Log.logInfo(`${temperatureMeasurement}`);
                        Log.logInfo(`${humidityMeasurement}`);
                        measurements.push(temperatureMeasurement);
                        measurements.push(humidityMeasurement);
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