import { MeasurementUnit, MeasurementLocation } from "../models/measurement";
import { LED } from "../models/led";
import { DHTSensor } from "../models/dhtSensor";

const serverHost = 'http://192.168.0.100:8000';
const username = 'admin';
const password = 'aA12345678&';

const successLed = new LED(20, 100, 5000);
const errorLed = new LED(21, 100, 5000);

const dhtOutdoorSensor = new DHTSensor(11, 23, MeasurementUnit.degrees, MeasurementUnit.relative, MeasurementLocation.outdoor);
const dhtIndoorSensor = new DHTSensor(11, 24, MeasurementUnit.degrees, MeasurementUnit.relative, MeasurementLocation.indoor);
const sensors = [
    dhtOutdoorSensor,
    dhtIndoorSensor
];

const location = {
    longitude: -8.40,
    latitude: 43.40
};

const debug = true;

export default {
    serverHost,
    username,
    password,
    successLed,
    errorLed,
    sensors,
    location,
    debug
};
