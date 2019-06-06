import onError from "./onError";
import onListen from "./onListen";
import http from "http";

export default (server: http.Server) => {
  //TODO: Rethink this approach.
  server.on("error", onError(server));
  server.on("listening", onListen(server));
};
