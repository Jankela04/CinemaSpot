import { QueryClient, DefaultOptions } from "@tanstack/react-query";

const queryConfig: DefaultOptions = {
    queries: {
        useErrorBoundary: true,
    },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
