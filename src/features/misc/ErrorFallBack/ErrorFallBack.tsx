import styles from "./ErrorFallBack.module.scss";

export const ErrorFallBack = () => {
    return (
        <div className={styles.page}>
            <div className={styles.main}>
                <h1>Oops</h1>
                <span>Something Went Wrong</span>
                <button
                    className={styles.button}
                    onClick={() =>
                        window.location.assign(window.location.origin)
                    }
                >
                    Refresh
                </button>
            </div>
        </div>
    );
};
