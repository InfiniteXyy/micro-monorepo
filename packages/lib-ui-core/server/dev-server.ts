import { startServer } from "@xyz/lib-service-core";
import { devPort } from "../config.json";
import { appRouter } from "./services";

startServer(appRouter, devPort);

console.log("joint backend running on http://localhost:2022");
