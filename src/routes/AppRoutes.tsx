import { HomePage, TitlePage } from "@/pages";
import { useRoutes, Navigate } from "react-router-dom";

export const AppRoutes = () => {
    const routes = [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/:titleid",
            element: <TitlePage />,
        },
        {
            path: "*",
            element: <Navigate to="/" />,
        },
    ];
    const element = useRoutes(routes);

    return <>{element}</>;
};
