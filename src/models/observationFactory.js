export class ObservationFactory {
    static buildObservationsJSON(measurements) {
        const observations = measurements.map((measurement) => {
            return measurement.toJSON()
        });
        return {
            observations
        }
    }
}