import config from "../config/index";
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
  static blinkAck() {
    const led = config.ackLed;
    led.blinkAck();
  }
}
