import { startServer } from "@xyz/lib-service-core";
// @ts-expect-error -- import js config
import { devPort } from "../config.js";
import { appRouter } from "./services";

startServer(appRouter, devPort);

console.log("joint backend running on http://localhost:2022");
