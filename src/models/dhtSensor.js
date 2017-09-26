export class DHTSensor {
    constructor(dhtType, gpio, temperatureUnits, humidityUnits, measurementLocation) {
        this.dhtType = dhtType;
        this.gpio = gpio;
        this.temperatureUnits = temperatureUnits;
        this.humidityUnits = humidityUnits;
        this.measurementLocation = measurementLocation;
    }
    toString() {
        return `DHT${this.dhtType}_${this.measurementLocation} @ GPIO${this.gpio}`
    }
}