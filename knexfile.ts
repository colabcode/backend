import config from "./config";

const db = {
  client: "pg",
  connection: config.db.url
};

export = db;
