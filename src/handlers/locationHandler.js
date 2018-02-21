import config from '../config/index';

export class LocationHandler {
    static getCurrentLocation() {
        //TODO: Use a GPS sensor to obtain location. This one looks good: https://www.adafruit.com/product/746
        return {
            type: "Point",
            coordinates: [
                config.location.longitude,
                config.location.latitude
            ]
        };
    }
}
