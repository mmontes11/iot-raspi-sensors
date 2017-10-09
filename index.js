import { LEDHandler } from './src/handlers/ledHandler';
import { DHTHandler } from './src/handlers/dhtHandler';
import { ObservationFactory } from "./src/models/observationFactory"
import config from './config/raspi';
import IoTClient from "./lib/iot_client/index";
import { Log } from "./src/util/log"

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