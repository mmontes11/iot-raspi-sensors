import config from '../../config/raspi';
import { TemperatureMeasurement, HumidityMeasurement } from '../models/measurement';
import { Log } from '../util/log';

export class DHTHandler {
    static async read() {
        try {
            let measurements = [];
            const sensors = await config.getSensors();
            for (const sensor of sensors) {
                const { temperatureValue, humidityValue } = await sensor.read();
                const temperatureMeasurement = new TemperatureMeasurement(temperatureValue, sensor.temperatureUnits, sensor.measurementLocation, sensor.relatedEntities);
                const humidityMeasurement = new HumidityMeasurement(humidityValue, sensor.humidityUnits, sensor.measurementLocation, sensor.relatedEntities);
                Log.logInfo(`Reading from ${sensor} ...`);
                Log.logInfo(`${temperatureMeasurement}`);
                Log.logInfo(`${humidityMeasurement}`);
                measurements.push(temperatureMeasurement);
                measurements.push(humidityMeasurement);
            }
            return measurements;
        } catch (err) {
            throw err;
        }
    }
}