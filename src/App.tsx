import { MainProvider } from "@/providers/MainProvider";
import { AppRoutes } from "@/routes";

function App() {
    return (
        <MainProvider>
            <AppRoutes />
        </MainProvider>
    );
}

export default App;
