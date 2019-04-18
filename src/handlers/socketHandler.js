import { Log } from "../util/log";
import { SensorHandler } from "./sensorHandler";
import config from "../config";

export class SocketHandler {
  constructor(io) {
    this.io = io;
    this.numConnections = 0;
    this.interval = config.socketInterval;
    this.intervalId = null;
  }
  static _getData(measurementList) {
    let data = {};
    measurementList.measurements.forEach(measurement => {
      data = {
        ...data,
        [measurement.type]: {
          value: measurement.value,
          unit: measurement.unit,
        },
      };
    });
    return {
      data,
      phenomenonTime: new Date().toISOString(),
    };
  }
  listen() {
    this.io.on("connection", socket => {
      Log.logInfo("New connection");
      this.numConnections += 1;
      Log.logInfo(`Number of connections: ${this.numConnections}`);

      if (this.intervalId === null) {
        this.intervalId = setInterval(async () => {
          try {
            const measurementList = await SensorHandler.read();
            const data = SocketHandler._getData(measurementList);
            socket.emit("data", data);
            Log.logInfo(`Emiting data: ${JSON.stringify(data)}`);
          } catch (err) {
            Log.logError(err);
          }
        }, this.interval);
      }

      socket.on("disconnect", () => {
        Log.logInfo("New disconnection");
        this.numConnections -= 1;
        Log.logInfo(`Number of connections: ${this.numConnections}`);

        if (this.numConnections === 0 && this.intervalId !== null) {
          this.clearInterval();
        }
      });
    });
  }
  clearInterval() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  close() {
    Log.logInfo("Socket server stopped");
    this.clearInterval();
    Object.keys(this.io.sockets.sockets).forEach(s => {
      this.io.sockets.sockets[s].disconnect(true);
    });
  }
}
