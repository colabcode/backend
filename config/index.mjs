import dotenv from "dotenv";

const env = process.env.NODE_ENV;

if (!env || ["development"].includes(env)) {
  dotenv.config();
}

export default {
  app: {
    port: +process.env.PORT || 8080
  },
  db: {
    url: process.env.DATABASE_URL
  },
  env: {
    dev: !env || ["development"].includes(env),
    prod: env && ["production"].includes(env)
  }
};
