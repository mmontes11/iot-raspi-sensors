import { MeasurementUnit, MeasurementLocation } from "../src/models/measurement";
import { LED } from "../src/models/led";
import { DHTSensor } from "../src/models/dhtSensor";
import { Point } from "../src/models/geometry"
import { RelatedEntity, RelatedEntityType } from "../src/models/relatedEntity"

const relatedEntityName = "Martin's flat";
const successLed = new LED(4, 100, 5000);
const errorLed = new LED(17, 100, 5000);
const serverHost = 'http://mmontes-asus:8000';
const username = 'admin';
const password = 'aA12345678&';
const debug = true;

const getSensors = async () => {
    try {
        const currentPoint = await Point.getCurrentPoint();
        const relatedEntity = new RelatedEntity(relatedEntityName, RelatedEntityType.building, currentPoint);
        const dhtOutdoorSensor = new DHTSensor(11, 23, MeasurementUnit.degrees, MeasurementUnit.relative, MeasurementLocation.outdoor, [relatedEntity]);
        const dhtIndoorSensor = new DHTSensor(11, 24, MeasurementUnit.degrees, MeasurementUnit.relative, MeasurementLocation.indoor, [relatedEntity]);
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
    debug
};