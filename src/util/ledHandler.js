import onoff from 'onoff';
import config from '../../config';

export class LedHandler {
    constructor() {
        this.successLed = onoff.Gpio(config.successLedGpio, 'out');
        this.errorLed = onoff.Gpio(config.errorLedGpio, 'out');
    }
    blinkForSuccess() {
        setTimeout(this._blinkLed(this.successLed), config.blinkIntervalInMs)
    }
    blinkForError() {
        setTimeout(this._blinkLed(this.errorLed), config.blinkIntervalInMs)
    }
    _blinkLed(led) {
        if (led.readSync() === 0) {
            led.writeSync(1);
        } else {
            led.writeSync(0);
        }
    }
}