class Measurement {
    constructor(type, value, unit, location) {
        this.type = `${type}_${location}`;
        this.value = value;
        this.unit = unit;
    }
    toString() {
        return `${this.type} ${this.value}${this.unit.symbol}`;
    }
}

class TemperatureMeasurement extends Measurement {
    constructor(value, unit, location) {
        super(MeasurementType.temperature, value, unit, location);
    }
}

class HumidityMeasurement extends Measurement {
    constructor(value, unit, location) {
        super(MeasurementType.humidity, value, unit, location);
    }
}

const MeasurementType = Object.freeze({
    temperature: "temperature" ,
    humidity: "humidity"
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