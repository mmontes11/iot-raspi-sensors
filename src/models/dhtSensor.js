import Promise from 'bluebird';
import dhtSensorLib from  'node-dht-sensor';

export class DHTSensor {
    constructor(dhtType, gpio, temperatureUnits, humidityUnits, measurementLocation, relatedEntities) {
        this.dhtType = dhtType;
        this.gpio = gpio;
        this.temperatureUnits = temperatureUnits;
        this.humidityUnits = humidityUnits;
        this.measurementLocation = measurementLocation;
        this.relatedEntities = relatedEntities;
    }
    setRelatedEntities(relatedEntities) {
        this.relatedEntities = relatedEntities
    }
    toString() {
        return `DHT${this.dhtType}_${this.measurementLocation} @ GPIO${this.gpio}`
    }
    read() {
        return new Promise((resolve, reject) => {
            dhtSensorLib.read(this.dhtType, this.gpio, (err, temperatureValue, humidityValue) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        temperatureValue,
                        humidityValue
                    });
                }
            });
        });
    }
}