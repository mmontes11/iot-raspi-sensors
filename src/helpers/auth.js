import iotClient from "../lib/iotClient";
import { Log } from "../util/log";

export const checkSocketAuth = async (socket, next) => {
  const { handshake: { query: { token } } } = socket;
  if (token) {
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
