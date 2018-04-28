import os from "os";
import { LocationHandler } from "../handlers/locationHandler";
import config from "../config/index";

export class Thing {
  constructor(supportedObservationTypes) {
    this.topic = config.topic;
    this.supportedObservationTypes = supportedObservationTypes;
    this.name = os.hostname();
    this.geometry = LocationHandler.getCurrentLocation();
  }
  toJSON() {
    return {
      name: this.name,
      geometry: this.geometry,
      topic: this.topic,
      supportedObservationTypes: this.supportedObservationTypes,
    };
  }
}
