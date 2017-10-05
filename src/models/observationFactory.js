import os from 'os';

export class ObservationFactory {
    static buildObservationsJSON(measurements) {
        const observations = measurements.map((measurement) => {
            ObservationFactory.buildObservationSON(measurement);
        });
        return {
            observations
        }
    }
    static buildObservationSON(measurement) {
        return {
            kind: measurement.kind,
            type: measurement.type,
            value: measurement.value,
            unit: measurement.unit,
            device: os.hostname(),
            relatedEntities: []
        }
    }
}