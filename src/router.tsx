import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // Every new page should start at its heading. Individual in-page links still
    // use their hash target, but a previous page's scroll position is never
    // carried into a different page.
    scrollRestoration: false,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
