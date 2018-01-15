import Promise from 'bluebird';
import config from '../config/raspi';
import { TemperatureMeasurement, HumidityMeasurement } from '../models/measurement';
import { Log } from '../util/log';

export class DHTHandler {
    static async read() {
        try {
            const sensors = await config.getSensors();
            const readPromises = sensors.map((sensor) => {
                return sensor.read().reflect();
            });
            let measurements = [];
            await Promise.all(readPromises)
                .each((inspection, index) => {
                    const sensor = sensors[index];
                    if (inspection.isFulfilled()) {
                        const { temperatureValue, humidityValue } = inspection.value();
                        const temperatureMeasurement = new TemperatureMeasurement(temperatureValue, sensor.temperatureUnits, sensor.measurementLocation, sensor.relatedEntities);
                        const humidityMeasurement = new HumidityMeasurement(humidityValue, sensor.humidityUnits, sensor.measurementLocation, sensor.relatedEntities);
                        Log.logInfo(`Reading from ${sensor} ...`);
                        Log.logInfo(`${temperatureMeasurement}`);
                        Log.logInfo(`${humidityMeasurement}`);
                        measurements.push(temperatureMeasurement);
                        measurements.push(humidityMeasurement);
                    } else {
                        Log.logError(`Error reading from ${sensor}: ${inspection.reason()}`)
                    }
                });
            return measurements;
        } catch (err) {
            throw err;
        }
    }
}