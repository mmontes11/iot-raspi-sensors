import config from '../config/raspi';

export class LocationHandler {
    static getCurrentLocation() {
        //TODO: Use a GPS sensor to obtain location. This one looks good: https://www.adafruit.com/product/746
        return {
            type: "Point",
            coordinates: [
                config.location.latitude,
                config.location.longitude
            ]
        };
    }
}