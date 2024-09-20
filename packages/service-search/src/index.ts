import { publicProcedure, router } from '@xyz/lib-service-core';
import { z } from 'zod';

export const appRouter = router({
  search: publicProcedure
    .meta({ openapi: { method: 'GET', path: '/api/search' } }) // for swagger
    .input(z.object({ keyword: z.string().describe('keyword') }))
    .output(z.array(z.object({ query: z.string(), title: z.string() })))
    .query(({ input }) => [
      { query: input.keyword, title: `item 1: ${input.keyword}` },
      { query: input.keyword, title: `item 2: ${input.keyword}` },
    ]),
});
