import config from '../../config/raspi';
import { Log } from "../util/log";

export class LEDHandler {
    static blinkForSuccess() {
        const led = config.successLed;
        Log.logInfo(`${led} blinking for success`);
        led.blink();
    }
    static blinkForError() {
        const led = config.errorLed;
        Log.logInfo(`${led} blinking for error`);
        led.blink();
    }

}