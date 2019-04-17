import express from "express";
import { Server } from "http";
import SocketIO from "socket.io";
import { SocketHandler } from "./handlers/socketHandler";
import { checkSocketAuth } from "./helpers/auth";
import config from "./config";
import { Log } from "./util/log";

const app = express();
const server = new Server(app);
const io = new SocketIO(server);

io.use(checkSocketAuth);

server.listen(config.nodePort, err => {
  if (!err) {
    Log.logInfo(`NodeJS server started on port ${config.nodePort}`);
  }
});
server.on("error", err => {
  Log.logError(`Error in NodeJS server on port ${config.socketServerPort}:`);
  Log.logError(err);
});
server.on("close", () => {
  Log.logInfo(`Stopped NodeJS server on port ${config.nodePort}`);
});

const socketHandler = new SocketHandler(io);
socketHandler.listen();

process.on("SIGINT", () => {
  server.close();
  socketHandler.close();
});
