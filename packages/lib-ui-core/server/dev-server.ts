import { startServer } from '@xyz/lib-service-core';
// @ts-expect-error -- to import js config
import { devPort } from '../config.js';
import { appRouter } from './services';

startServer(appRouter, devPort);

// eslint-disable-next-line no-console
console.log('joint backend running on http://localhost:2022');
