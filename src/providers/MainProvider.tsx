import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";

type MainProviderProps = {
    children: ReactNode;
};

const ErrorFallBack = () => {
    return <div>Error</div>;
};

export const MainProvider = ({ children }: MainProviderProps) => {
    return (
        <ErrorBoundary fallback={<ErrorFallBack />}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>{children}</BrowserRouter>
            </QueryClientProvider>
        </ErrorBoundary>
    );
};
