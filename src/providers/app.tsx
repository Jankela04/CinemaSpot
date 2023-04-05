import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { ErrorBoundary } from "react-error-boundary";

type AppProviderProps = {
    children: ReactNode;
};

const ErrorFallBack = () => {
    return <div>Error</div>;
};

const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <ErrorBoundary fallback={<ErrorFallBack />}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ErrorBoundary>
    );
};

export default AppProvider;
