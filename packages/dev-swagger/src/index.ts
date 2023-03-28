import { appRouter } from "@xyz/lib-ui-core/server/services";
import { createContext } from "@xyz/lib-service-core";
import express from "express";
import swaggerUi from "swagger-ui-express";
import {
  generateOpenApiDocument,
  createOpenApiExpressMiddleware,
} from "trpc-openapi";

export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "swagger",
  version: "1.0.0",
  baseUrl: `http://localhost:1999/api`,
});

const app = express();
app.use("/", swaggerUi.serve);
app.get("/", swaggerUi.setup(openApiDocument));
app.use(
  "/api",
  createOpenApiExpressMiddleware({ router: appRouter, createContext })
);

app.listen(1999);

console.log("doc on http://localhost:1999");
