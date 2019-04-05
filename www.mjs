import config from "@config";
import http from "http";

export default app => {
  const server = http.createServer(app);

  server.listen(config.app.port);
};
