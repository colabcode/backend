import config from "../../../config";
import log from "../../log";

export default (server: any) => (error: NodeJS.ErrnoException) => {
  const port: number = config.app.port;
  const bind: string = "Port " + port;

  const code: string = error.code;

  if (code === "EACCES") {
    log.error(`${bind} requires elevated privileges.`);
  } else if (code === "EADDRINUSE") {
    log.error(`${bind} is already in use.`);
  }

  throw error;
};
