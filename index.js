import { LEDHandler } from './src/handlers/ledHandler';
import { DHTHandler } from './src/handlers/dhtHandler';
import { ObservationFactory } from "./src/models/observationFactory"
import { Log } from "./src/util/log"

(async () => {
    try {
        const measurements = await DHTHandler.read();
        const observationsJSON = ObservationFactory.buildObservationsJSON(measurements);
        Log.logInfo('Observations JSON:');
        Log.logInfo(JSON.stringify(observationsJSON, undefined, 2));
        LEDHandler.blinkForSuccess();
    } catch (err) {
        Log.logError(err);
        LEDHandler.blinkForError();
    }
})();