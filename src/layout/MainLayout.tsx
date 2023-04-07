import { ReactNode } from "react";
import styles from "./MainLayout.module.scss";

type MainLayoutProps = {
    children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className={styles.layout}>
            {/*todo navbar */}
            {children}
        </div>
    );
};
