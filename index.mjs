import express from "express";
import graphql from "./src/graphql";
import log from "@log";
import www from "./www";

const app = express();

log.info("[0] Starting Web Server.");
www(app);

log.info("[1] Attaching GraphQL.");
graphql(app);

log.info("[*] App is ready.");

export default app;
