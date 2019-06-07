const dotenv = require("dotenv");

const env = process.env.NODE_ENV;

if (!env || ["development"].includes(env)) {
  dotenv.config();
}

module.exports = {
  client: "pg",
  DATABASE_URL: process.env.DATABASE_URL
};
