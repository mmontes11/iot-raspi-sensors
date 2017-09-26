import { MeasurementUnit, MeasurementLocation } from "../src/models/measurement"
import { LED } from "../src/models/led"
import { DHTSensor } from "../src/models/dhtSensor"

const successLed = new LED(4, 100, 5000);
const errorLed = new LED(17, 100, 5000);
const dhtOutdoorSensor = new DHTSensor(11, 23, MeasurementUnit.degrees, MeasurementUnit.relative, MeasurementLocation.outdoor);
const dhtIndoorSensor = new DHTSensor(11, 24, MeasurementUnit.degrees, MeasurementUnit.relative, MeasurementLocation.indoor);

export default {
    successLed: successLed,
    errorLed: errorLed,
    dhtSensors: [
        dhtOutdoorSensor,
        dhtIndoorSensor
    ],
    debug: true
};