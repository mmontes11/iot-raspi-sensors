import onoff from 'onoff';

export class LED {
    constructor(gpio, blinkDurationInMs, blinkTotalPeriodInMs) {
        this.gpio = gpio;
        this.onoff = onoff.Gpio(gpio, 'out');
        this.blinkDurationInMs = blinkDurationInMs;
        this.blinkTotalPeriodInMs = blinkTotalPeriodInMs;
    }
    toString() {
        return `LED @ GPIO${this.gpio}`;
    }
    blink() {
        const interval = setInterval(() => {
            this.onoff.writeSync(this.onoff.readSync() === 0 ? 1 : 0)
        }, this.blinkDurationInMs);
        setTimeout(() => {
            clearInterval(interval);
            this.onoff.writeSync(0);
            this.onoff.unexport();
        }, this.blinkTotalPeriodInMs);
    }
}