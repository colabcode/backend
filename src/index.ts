import express from "express";
import graphql from "./graphql";
import log from "./log";
import www from "./www";
import routing from "./routing";

const app = express();

log.info("[0] Starting Web Server.");
www(app);

log.info("[1] Attaching GraphQL.");
graphql(app);

log.info("[2] Attaching Routing.");
routing(app);

log.info("[*] App is ready.");

export default app;
