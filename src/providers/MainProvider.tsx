import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import { ErrorFallBack } from "@/features/misc/ErrorFallBack";
import { MainLayout } from "@/layout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type MainProviderProps = {
    children: ReactNode;
};

export const MainProvider = ({ children }: MainProviderProps) => {
    return (
        <ErrorBoundary fallback={<ErrorFallBack />}>
            <QueryClientProvider client={queryClient}>
                <MainLayout>
                    <BrowserRouter>{children}</BrowserRouter>
                    <ReactQueryDevtools />
                </MainLayout>
            </QueryClientProvider>
        </ErrorBoundary>
    );
};
