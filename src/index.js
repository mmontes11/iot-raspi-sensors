import { LEDHandler } from './handlers/ledHandler';
import { DHTHandler } from './handlers/dhtHandler';
import { ObservationFactory } from "./models/observationFactory"
import IoTClient from "@mmontes11/iot_client";
import { Log } from "./util/log"
import config from './config/raspi';

const iotClient = new IoTClient({
    host: config.serverHost,
    username: config.username,
    password: config.password
});

(async () => {
    try {
        const measurements = await DHTHandler.read();
        const observationsJSON = ObservationFactory.buildObservationsJSON(measurements);
        await iotClient.observationsService.create(observationsJSON);
        LEDHandler.blinkForSuccess();
    } catch (err) {
        Log.logError(err);
        LEDHandler.blinkForError();
    }
})();