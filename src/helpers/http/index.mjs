import onError from "./onError";
import onListen from "./onListen";

export default server => {
  //TODO: Rethink this approach.
  server.on("error", onError(server));
  server.on("listening", onListen(server));
};
