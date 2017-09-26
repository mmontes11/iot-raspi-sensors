export class DHTSensor {
    constructor(dhtType, gpio, temperatureUnits, humidityUnits, measurementLocation) {
        this.name = `DHT${dhtType}_${measurementLocation} @ GPIO${gpio}`;
        this.dhtType = dhtType;
        this.gpio = gpio;
        this.temperatureUnits = temperatureUnits;
        this.humidityUnits = humidityUnits;
        this.measurementLocation = measurementLocation;
    }
}