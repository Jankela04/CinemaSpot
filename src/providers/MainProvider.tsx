import { ReactNode, Suspense } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import { ErrorFallBack } from "@/features/misc/ErrorFallBack";
import { MainLayout } from "@/layout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { LoadingSpinner } from "@/features/misc/LoadingSpinner";

type MainProviderProps = {
    children: ReactNode;
};

export const MainProvider = ({ children }: MainProviderProps) => {
    return (
        <ErrorBoundary fallback={<ErrorFallBack />}>
            <Suspense fallback={<LoadingSpinner />}>
                <QueryClientProvider client={queryClient}>
                    <MainLayout>
                        <BrowserRouter>{children}</BrowserRouter>
                        <ReactQueryDevtools />
                    </MainLayout>
                </QueryClientProvider>
            </Suspense>
        </ErrorBoundary>
    );
};
