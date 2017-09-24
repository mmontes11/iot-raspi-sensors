import { LedHandler } from './src/util/ledHandler';

const ledHandler = new LedHandler();
if (Math.random() >= 0.5) {
	ledHandler.blinkForSuccess();
} else {
	ledHandler.blinkForError();
}
