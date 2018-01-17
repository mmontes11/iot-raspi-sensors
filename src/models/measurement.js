import os from 'os';

class Measurement {
    constructor(type, value, unit, measurementLocation) {
        this.kind = 'measurement';
        this.type = `${type}_${measurementLocation}`;
        this.value = value;
        this.unit = unit;
    }
    toString() {
        return `${this.type} ${this.value}${this.unit.symbol}`;
    }
    toJSON() {
        return {
            kind: this.kind,
            type: this.type,
            value: this.value,
            unit: this.unit,
            device: os.hostname(),
        }
    }
}

class TemperatureMeasurement extends Measurement {
    constructor(value, unit, measurementLocation) {
        super(MeasurementType.temperature, value, unit, measurementLocation);
    }
}

class HumidityMeasurement extends Measurement {
    constructor(value, unit, measurementLocation) {
        super(MeasurementType.humidity, value, unit, measurementLocation);
    }
}

const MeasurementType = Object.freeze({
    temperature: 'temperature',
    humidity: 'humidity'
});

const MeasurementUnit = Object.freeze({
    degrees: {
        name: 'degress',
        symbol: '°C'
    },
    relative: {
        name: 'relative',
        symbol: '%'
    }
});

const MeasurementLocation = Object.freeze({
    indoor: 'indoor',
    outdoor: 'outdoor'
});

export { Measurement, TemperatureMeasurement, HumidityMeasurement, MeasurementType, MeasurementUnit, MeasurementLocation };