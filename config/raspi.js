import { MeasurementUnit, MeasurementLocation } from "../src/models/measurement"

export default {
    successLedGpio: 4,
    errorLedGpio: 17,
    blinkDurationInMs: 100,
    blinkTotalPeriodInMs: 5000,
    dhtSensors: [
        {
            name: 'DHT11_indoor',
            dhtType: 11,
            gpio: 23,
            temperatureUnits: MeasurementUnit.degrees,
            humidityUnits: MeasurementUnit.relative,
            measurementLocation: MeasurementLocation.indoor
        }
    ]
};