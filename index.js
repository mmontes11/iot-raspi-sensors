import { LEDHandler } from './src/gpio/ledHandler';
import { DHTHandler } from './src/gpio/dhtHandler';

const ledHandler = new LEDHandler();
if (Math.random() >= 0.5) {
	ledHandler.blinkForSuccess();
} else {
	ledHandler.blinkForError();
}

DHTHandler.read();