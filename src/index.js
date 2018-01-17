import { LEDHandler } from './handlers/ledHandler';
import { DHTHandler } from './handlers/dhtHandler';
import { Thing } from './models/thing';
import { Log } from "./util/log"
import IoTClient from "@mmontes11/iot_client";
import config from './config/raspi';

const iotClient = new IoTClient({
    host: config.serverHost,
    username: config.username,
    password: config.password
});

(async () => {
    try {
        const measurementList = await DHTHandler.read();
        const supportedObservationTypes = {
            observations: measurementList.measurementTypes(),
            events: []
        };
        const thing = new Thing(supportedObservationTypes);
        await iotClient.observationsService.create({
            observations: measurementList.measurements,
            thing: thing.toJSON()
        });
        LEDHandler.blinkForSuccess();
    } catch (err) {
        Log.logError(err);
        LEDHandler.blinkForError();
    }
})();