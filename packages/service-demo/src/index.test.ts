import { it, expect, describe } from "vitest";
import { TRPCError } from "@trpc/server";
import { appRouter } from "./index";

describe("demo test", () => {
  it("should greet works", async () => {
    const caller = appRouter.createCaller({ user: null });
    const result = await caller.greet({ name: "Alice" });
    expect(result).toStrictEqual({ greeting: "hello, Alice!" });
  });

  it("should privateGreet work", async () => {
    // anonymous user will throw 401 error
    const caller = appRouter.createCaller({ user: null });
    await expect(caller.privateGreet({ name: "Alice" })).rejects.toThrowError(
      new TRPCError({ code: "UNAUTHORIZED" })
    );

    // logged in user will work
    const callerWithAuth = appRouter.createCaller({ user: { name: "xyy" } });
    const result = await callerWithAuth.privateGreet({ name: "Alice" });
    expect(result).toStrictEqual({ greeting: "xyyAlice" });
  });
});
