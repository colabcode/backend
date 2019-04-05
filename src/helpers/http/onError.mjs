import config from "@config";
import log from "@log";

export default server => error => {
  const port = config.app.port;
  let bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  const handle = {
    EACCES: () => {
      dbg(`${bind} requires elevated privileges.`);
      // eslint-disable-next-line
      process.exit(1);
    },
    EADDRINUSE: () => {
      log.error(`${bind} is already in use.`);
      // eslint-disable-next-line
      process.exit(1);
    }
  };

  handle[error.code] && handle[error.code]();

  throw error;
};
