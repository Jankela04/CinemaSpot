import { Button } from "@mui/material";
import { MediaInfo } from "../../types";
import styles from "./HeroBanner.module.scss";
import { useNavigate } from "react-router-dom";

type HeroBannerProps = {
    media: MediaInfo;
};

export const HeroBanner = ({ media }: HeroBannerProps) => {
    const navigate = useNavigate();
    return (
        <div className={styles.banner}>
            <img
                src={media.Poster}
                className={styles.image}
                alt={media.Title}
            />
            <div className={styles.info}>
                <div>
                    <h1 className={styles.title}>{media.Title}</h1>
                    <span className={styles.year}>{media.Year}</span>
                    <p className={styles.plot}>{media.Plot}</p>
                </div>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => navigate(`/${media.imdbID}`)}
                >
                    Details
                </Button>
            </div>
        </div>
    );
};
