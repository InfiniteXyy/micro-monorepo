import { it, expect, describe } from "vitest";
import { appRouter } from "./index";

describe("demo test", () => {
  it("should search works", async () => {
    const caller = appRouter.createCaller({ user: null });
    const result = await caller.search({ keyword: "keyword" });
    expect(result).toStrictEqual([
      { query: "keyword", title: "item 1: keyword" },
      { query: "keyword", title: "item 2: keyword" },
    ]);
  });
});
