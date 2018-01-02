import { MeasurementUnit, MeasurementLocation } from "../models/measurement";
import { LED } from "../models/led";
import { DHTSensor } from "../models/dhtSensor";

const successLed = new LED(20, 100, 5000);
const errorLed = new LED(21, 100, 5000);
const serverHost = 'http://192.168.0.100:8000';
const username = 'admin';
const password = 'aA12345678&';
const location = {
    longitude: -8.40,
    latitude: 43.40
};
const debug = true;

const getSensors = async () => {
    try {
        const dhtOutdoorSensor = new DHTSensor(11, 23, MeasurementUnit.degrees, MeasurementUnit.relative, MeasurementLocation.outdoor);
        const dhtIndoorSensor = new DHTSensor(11, 24, MeasurementUnit.degrees, MeasurementUnit.relative, MeasurementLocation.indoor);
        return [
            dhtOutdoorSensor,
            dhtIndoorSensor
        ];
    } catch (err) {
        throw err;
    }
};

export default {
    successLed,
    errorLed,
    getSensors,
    serverHost,
    username,
    password,
    location,
    debug
};
