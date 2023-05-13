import { useParams } from "react-router-dom";
import { useTitleInfo } from "./api/getTitleInfo";
import { Container } from "@mui/material";
import styles from "./styles.module.scss";

type Params = {
    titleid: string;
};

export const TitlePage = () => {
    const { titleid } = useParams<keyof Params>() as Params;

    const [{ data: titleData }, { data: youtubeTrailerData }] =
        useTitleInfo(titleid);

    if (!titleData || !youtubeTrailerData) return null;

    console.log(titleData);

    return (
        <Container>
            <div className={styles.info}>
                <div className={styles.left}>
                    <h1 className={styles.title}>{titleData.Title}</h1>
                    <span>
                        {titleData.Type === "movie" ? "Movie" : "TV Series"}
                        {" - "}
                        {titleData.Year}
                        {" - "}
                        {titleData.Runtime}
                        {" - "}
                        {titleData.Rated}
                    </span>
                </div>
                <div></div>
            </div>
        </Container>
    );
};
