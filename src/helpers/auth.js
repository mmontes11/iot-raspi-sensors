import iotClient from "../lib/iotClient";
import { Log } from "../util/log";

export const checkSocketAuth = async (socket, next) => {
  if (socket.handshake.query && socket.handshake.query.token) {
    const token = socket.handshake.query.token;
    try {
      await iotClient.authService.checkAuth({ token });
      return next();
    } catch (err) {
      Log.logError(err);
      return next(err);
    }
  } else {
    const authError = new Error("Auth error");
    Log.logError(authError);
    return next(authError);
  }
};
