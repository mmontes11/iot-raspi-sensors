import { MeasurementUnit, MeasurementLocation } from "../src/models/measurement"
import { DHTSensor } from "../src/models/dhtSensor"

const dhtOutdoorSensor = new DHTSensor(11, 23, MeasurementUnit.degrees, MeasurementUnit.relative, MeasurementLocation.outdoor);
const dhtIndoorSensor = new DHTSensor(11, 24, MeasurementUnit.degrees, MeasurementUnit.relative, MeasurementLocation.indoor);

export default {
    successLedGpio: 4,
    errorLedGpio: 17,
    blinkDurationInMs: 100,
    blinkTotalPeriodInMs: 5000,
    dhtSensors: [
        dhtOutdoorSensor,
        dhtIndoorSensor
    ]
};