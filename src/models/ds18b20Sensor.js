import Promise from "bluebird";
import ds18b20Lib from "ds18b20";
import _ from "underscore";

export class DS18B20Sensor {
  constructor(temperatureUnits, measurementLocation) {
    this.temperatureUnits = temperatureUnits;
    this.measurementLocation = measurementLocation;
  }
  toString() {
    return `DS18B20_${this.measurementLocation}`;
  }
  read() {
    return new Promise((resolve, reject) => {
      ds18b20Lib.sensors((err, ids) => {
        if (err) {
          reject(err);
        } else {
          const sensorID = _.first(ids);
          ds18b20Lib.temperature(sensorID, (errDs18b20, temperatureValue) => {
            if (errDs18b20) {
              reject(errDs18b20);
            } else {
              resolve({
                temperatureValue,
                temperatureUnits: this.temperatureUnits,
                measurementLocation: this.measurementLocation,
              });
            }
          });
        }
      });
    });
  }
}
