import config from "@config";
import winston from "winston";

const out = winston.format.printf(info => {
  return `${info.timestamp} [${info.level}]: ${info.message} (${info.ms})`;
});

const log = winston.createLogger({
  level: config.env.level,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.splat(),
    winston.format.ms(),
    out
  ),
  transports: [new winston.transports.Console()]
});

export default log;
