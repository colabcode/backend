const dotenv = require("dotenv");

const env = process.env.NODE_ENV;

if (!env || ["development"].includes(env)) {
  dotenv.config();
}

module.exports = {
  client: "pg",
  connection: process.env.DATABASE_URL
};
