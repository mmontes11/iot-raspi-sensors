import dhtSensorLib from  'node-dht-sensor';
import config from '../../config/raspi';
import { TemperatureMeasurement, HumidityMeasurement } from '../models/measurement';

export class DHTHandler {
    constructor() {
        this.sensors = config.dhtSensors;
    }
    read() {
        let measurements = [];
        for (const sensor of this.sensors) {
            dhtSensorLib.read(sensor.dhtType, sensor.gpio, (err, temperatureValue, humidityValue) => {
                if (err) {
                    console.log(`Error reading from ${sensor.name}`);
                    console.log(err);
                } else {
                    const temperatureMeasurement = new TemperatureMeasurement(temperatureValue, sensor.temperatureUnits, sensor.measurementLocation);
                    const humidityMeasurement = new HumidityMeasurement(humidityValue, sensor.humidityUnits, sensor.measurementLocation);
                    console.log(`Reading from ${sensor.name} ...`);
                    console.log(temperatureMeasurement.toString());
                    console.log(humidityMeasurement.toString());
                    measurements = [ ...measurements, temperatureMeasurement, humidityMeasurement ];
                }
            });
        }
        return measurements;
    }
}