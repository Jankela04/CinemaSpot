import { Button } from "@mui/material";
import { TitleInfo } from "@/types";
import styles from "./HeroBanner.module.scss";
import { useNavigate } from "react-router-dom";

type HeroBannerProps = {
    title: TitleInfo;
};

export const HeroBanner = ({ title }: HeroBannerProps) => {
    const navigate = useNavigate();
    return (
        <div className={styles.banner}>
            <img
                src={title.Poster}
                className={styles.image}
                alt={title.Title}
            />
            <div className={styles.info}>
                <div>
                    <h1 className={styles.title}>{title.Title}</h1>
                    <span className={styles.year}>{title.Year}</span>
                    <p className={styles.plot}>{title.Plot}</p>
                </div>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => navigate(`/${title.imdbID}`)}
                >
                    Details
                </Button>
            </div>
        </div>
    );
};
