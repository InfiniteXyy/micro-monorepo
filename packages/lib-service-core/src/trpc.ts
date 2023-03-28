import { inferAsyncReturnType, initTRPC, TRPCError } from "@trpc/server";
import { OpenApiMeta } from "trpc-openapi";
import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

export async function createContext({ req, res }: CreateExpressContextOptions) {
  if (req.headers.authorization?.split(" ")[1] !== "secret") {
    return { user: null };
  }
  return { user: { name: "xyy" } };
}

const t = initTRPC
  .context<inferAsyncReturnType<typeof createContext>>()
  .meta<OpenApiMeta>()
  .create();

const authMiddleware = t.middleware(async ({ next, ctx }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({ ctx: { user: ctx.user } });
});

export const publicProcedure = t.procedure;
export const authProcedure = t.procedure.use(authMiddleware);
export const router = t.router;
export const mergeRouters = t.mergeRouters;
