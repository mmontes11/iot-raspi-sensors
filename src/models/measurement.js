class Measurement {
    constructor(type, value, unit, location) {
        this.type = type;
        this.value = value;
        this.unit = unit;
    }
    _getType(type, location) {

    }
    toString() {
        return `${this.type}: ${this.value} ${this.unit.symbol}`;
    }
}

class TemperatureMeasurement extends Measurement {
    constructor(value, unit) {
        super(MeasurementType.temperature, value, unit);
    }
}

class HumidityMeasurement extends Measurement {
    constructor(value, unit) {
        super(MeasurementType.humidity, value, unit);
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