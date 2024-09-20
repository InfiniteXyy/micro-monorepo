import { mergeRouters } from '@xyz/lib-service-core';
import { appRouter as demoRouter } from '@xyz/service-demo';
import { appRouter as searchRouter } from '@xyz/service-search';

export const appRouter = mergeRouters(demoRouter, searchRouter);
export type AppRouter = typeof appRouter;
