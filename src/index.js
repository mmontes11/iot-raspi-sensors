import { LEDHandler } from "./handlers/ledHandler";
import { SensorHandler } from "./handlers/sensorHandler";
import { Thing } from "./models/thing";
import { Log } from "./util/log";
import iotClient from "./lib/iotClient";

(async () => {
  try {
    const measurementList = await SensorHandler.read();
    const supportedObservationTypes = {
      measurement: measurementList.measurementTypes(),
      event: [],
    };
    const thing = new Thing(supportedObservationTypes);
    await iotClient.observationsService.create({
      observations: measurementList.measurements,
      thing: thing.toJSON(),
    });
    LEDHandler.blinkForSuccess();
  } catch (err) {
    Log.logError(err);
    LEDHandler.blinkForError();
  }
})();
