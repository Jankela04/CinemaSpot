import { CircularProgress } from "@mui/material";
import styles from "./LoadingSpinner.module.scss";

export const LoadingSpinner = () => {
    return (
        <div className={styles.spinner}>
            <CircularProgress />
        </div>
    );
};
