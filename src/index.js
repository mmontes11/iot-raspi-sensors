import { LEDHandler } from './handlers/ledHandler';
import { DHTHandler } from './handlers/dhtHandler';
import { ObservationFactory } from "./models/observationFactory"
import config from './config/raspi';
import IoTClientManager from "./lib/iotClientManager";
import { Log } from "./util/log"

const iotClient = IoTClientManager.create(config.serverHost, config.username, config.password);

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