import express from "express";
import www from "./www";

const app = express();

www(app);

export default app;
