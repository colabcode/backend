import config from "../config";
import http from "http";
import httpEvents from "./helpers/http";

export default (app: Express.Application) => {
  const server = http.createServer(app);

  server.listen(config.app.port);

  //TODO: Check dis
  //app.set("port", config.app.port);

  httpEvents(server);
};
