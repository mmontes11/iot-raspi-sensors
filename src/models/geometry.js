import { LocationHandler } from "../handlers/locationHandler";

class Geometry {
    constructor(type) {
        this.type = type
    }
    toJSON() {
        return {
            type: this.type
        }
    }
}

class Point extends Geometry {
    constructor(longitude, latitude) {
        super('Point');
        this.latitude = latitude;
        this.longitude = longitude;
    }
    static async getCurrentPoint() {
        try {
            const currentLocation = await LocationHandler.getCurrentLocation();
            const currentLongitude = currentLocation.ll[1];
            const currentLatitude = currentLocation.ll[0];
            return new Point(currentLongitude, currentLatitude)
        } catch (err) {
            throw err;
        }
    }
    toJSON() {
        const pointJSON = {
            coordinates: [
                this.latitude,
                this.longitude
            ]
        };
        return Object.assign({}, super.toJSON(), pointJSON);
    }
}

export { Geometry, Point }