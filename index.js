import { LEDHandler } from './src/handlers/ledHandler';
import { DHTHandler } from './src/handlers/dhtHandler';

if (Math.random() >= 0.5) {
    LEDHandler.blinkForSuccess();
} else {
    LEDHandler.blinkForError();
}

DHTHandler.read();