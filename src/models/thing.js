import os from 'os';
import { LocationHandler } from '../handlers/locationHandler';

export class Thing {
    constructor(supportedObservationTypes) {
        this.supportedObservationTypes = supportedObservationTypes;
        this.name = os.hostname();
        this.geometry = LocationHandler.getCurrentLocation()
    }
    toJSON() {
        return {
            name: this.name,
            geometry: this.geometry,
            supportedObservationTypes: this.supportedObservationTypes
        }
    }
}