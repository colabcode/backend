import log from "@log";

export default server => () => {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  log.info(`Listening on ${bind}.`);
};
