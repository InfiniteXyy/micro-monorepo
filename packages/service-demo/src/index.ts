import { authProcedure, publicProcedure, router } from "@xyz/lib-service-core";
import { z } from "zod";

export const appRouter = router({
  greet: publicProcedure
    .meta({ openapi: { method: "GET", path: "/api/greet" } }) // for swagger
    .input(z.object({ name: z.enum(["Alice", "Bob"]).describe("your name") }))
    .output(z.object({ greeting: z.string().describe("You greeting output") }))
    .query(({ input, ctx }) => {
      return { greeting: `hello, ${input.name}!` };
    }),
  privateGreet: authProcedure
    .meta({
      openapi: { method: "GET", path: "/api/privateGreet", protect: true },
    }) // for swagger
    .input(z.object({ name: z.string().describe("your name") }))
    .output(z.object({ greeting: z.string().describe("You greeting output") }))
    .query(async ({ input, ctx }) => {
      return { greeting: ctx.user.name + input.name };
    }),
});
