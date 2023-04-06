import { HomePage } from "@/pages";
import { useRoutes, Navigate } from "react-router-dom";

export const AppRoutes = () => {
    const routes = [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "*",
            element: <Navigate to="/" />,
        },
    ];
    const element = useRoutes(routes);

    return <>{element}</>;
};
