import os from 'os';

class Measurement {
    constructor(type, value, unit, location, relatedEntities) {
        this.kind = 'measurement';
        this.type = `${type}_${location}`;
        this.value = value;
        this.unit = unit;
        this.relatedEntities = relatedEntities;
    }
    toString() {
        return `${this.type} ${this.value}${this.unit.symbol}`;
    }
    toJSON() {
        const relatedEntities = this.relatedEntities.map((relatedEntity) => {
            return relatedEntity.toJSON()
        });
        return {
            kind: this.kind,
            type: this.type,
            value: this.value,
            unit: this.unit,
            device: os.hostname(),
            relatedEntities: relatedEntities
        }
    }
}

class TemperatureMeasurement extends Measurement {
    constructor(value, unit, location, relatedEntities) {
        super(MeasurementType.temperature, value, unit, location, relatedEntities);
    }
}

class HumidityMeasurement extends Measurement {
    constructor(value, unit, location, relatedEntities) {
        super(MeasurementType.humidity, value, unit, location, relatedEntities);
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