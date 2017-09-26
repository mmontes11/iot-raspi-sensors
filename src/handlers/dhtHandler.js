import dhtSensorLib from  'node-dht-sensor';
import config from '../../config/raspi';
import { TemperatureMeasurement, HumidityMeasurement } from '../models/measurement';
import { Log } from '../util/log';

export class DHTHandler {
    static read() {
        let measurements = [];
        for (const sensor of config.dhtSensors) {
            dhtSensorLib.read(sensor.dhtType, sensor.gpio, (err, temperatureValue, humidityValue) => {
                if (err) {
                    Log.logError(`Error reading from ${sensor}`);
                    Log.logError(err);
                } else {
                    const temperatureMeasurement = new TemperatureMeasurement(temperatureValue, sensor.temperatureUnits, sensor.measurementLocation);
                    const humidityMeasurement = new HumidityMeasurement(humidityValue, sensor.humidityUnits, sensor.measurementLocation);
                    Log.logInfo(`Reading from ${sensor} ...`);
                    Log.logInfo(`${temperatureMeasurement}`);
                    Log.logInfo(`${humidityMeasurement}`);
                    measurements = [ ...measurements, temperatureMeasurement, humidityMeasurement ];
                }
            });
        }
        return measurements;
    }
}