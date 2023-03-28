import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../server/services";

export const trpc = createTRPCReact<AppRouter>();
