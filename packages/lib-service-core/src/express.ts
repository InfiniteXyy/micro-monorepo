import { Router } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import { createContext } from "./trpc.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const startServer = (router: Router<any>, port = 3000) => {
  const app = express();
  app.use(
    "/api",
    trpcExpress.createExpressMiddleware({ router, createContext })
  );
  app.listen(port);
};
