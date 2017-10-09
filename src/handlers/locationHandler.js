import publicIp from 'public-ip';
import geopIp from 'geoip-lite';

export class LocationHandler {
    static async getCurrentLocation() {
        try {
            const ip = await publicIp.v4();
            return geopIp.lookup(ip);
        } catch (err) {
            throw err;
        }
    }
}