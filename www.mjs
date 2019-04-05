import config from "@config";
import http from "http";
import httpEvents from "@helpers/http";

export default app => {
  const server = http.createServer(app);

  server.listen(config.app.port);

  app.set("port", config.app.port);

  httpEvents(server);
};
