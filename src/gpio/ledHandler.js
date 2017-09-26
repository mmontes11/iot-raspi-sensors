import onoff from 'onoff';
import config from '../../config/raspi';
import { Log } from "../util/log";

export class LEDHandler {
    constructor() {
        this.successLed = onoff.Gpio(config.successLedGpio, 'out');
        this.errorLed = onoff.Gpio(config.errorLedGpio, 'out');
    }
    blinkForSuccess() {
        Log.logInfo('LED blinking for success');
        this._blinkLed(this.successLed);
    }
    blinkForError() {
        Log.logInfo('LED blinking for error');
        this._blinkLed(this.errorLed);
    }
    _blinkLed(led) {
        const interval = setInterval(() => {
            led.writeSync(led.readSync() === 0 ? 1 : 0)
        }, config.blinkDurationInMs);
        setTimeout(() => {
            clearInterval(interval);
            led.writeSync(0);
            led.unexport();
        }, config.blinkTotalPeriodInMs);
    }
}