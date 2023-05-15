import { useParams } from "react-router-dom";
import { useTitleInfo } from "./api/getTitleInfo";
import { Container } from "@mui/material";
import styles from "./styles.module.scss";
import { TitleInfo } from "@/types";
import IMDBIcon from "@/assets/IMDb_icon.png";
import MetacriticIcon from "@/assets/Metacritic_icon.png";
import RottenTomatoesIcon from "@/assets/Rotten_Tomatoes_icon.png";
import { generateLink } from "./utils/getLinks";

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
                <Ratings title={titleData} />
            </div>
        </Container>
    );
};

export const Ratings = ({ title }: { title: TitleInfo }) => {
    const ratings = title.Ratings;

    return (
        <div className={styles.ratings}>
            {ratings.map((rating) => {
                return (
                    <div
                        className={styles.rating}
                        onClick={() => {
                            window.open(
                                generateLink(rating.Source, title),
                                "_blank"
                            );
                        }}
                    >
                        <div className={styles.rating_source}>
                            <img
                                src={
                                    rating.Source === "Internet Movie Database"
                                        ? IMDBIcon
                                        : rating.Source === "Rotten Tomatoes"
                                        ? RottenTomatoesIcon
                                        : MetacriticIcon
                                }
                                alt={rating.Source}
                            />
                        </div>
                        <div className={styles.score}>{rating.Value}</div>
                    </div>
                );
            })}
        </div>
    );
};
