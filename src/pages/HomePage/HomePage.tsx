import { useHeroBannerInfo } from "./api/getHeroBannerInfo";
import { getRandomMediaId } from "./utils/getRandomMedia";
import { usePopularTitles } from "./api/getPopularTitles";
import { HeroBanner } from "./components/HeroBanner";
import { Container } from "@mui/material";

export const HomePage = () => {
    const [{ data: popularShows }, { data: popularMovies }] =
        usePopularTitles();

    if (!popularShows && !popularMovies) return null;

    const heroMediaId = getRandomMediaId(popularMovies, popularShows);

    const { data: heroMedia } = useHeroBannerInfo(
        heroMediaId != null,
        heroMediaId
    );

    if (!heroMedia) return null;

    console.log(heroMedia);

    // const heroMediaInfo = {
    //     Title: "Grey's Anatomy",
    //     Year: "2005–",
    //     Rated: "TV-14",
    //     Released: "27 Mar 2005",
    //     Runtime: "41 min",
    //     Genre: "Drama, Romance",
    //     Director: "N/A",
    //     Writer: "Shonda Rhimes",
    //     Actors: "Ellen Pompeo, Chandra Wilson, James Pickens Jr.",
    //     Plot: "A drama centered on the personal and professional lives of five surgical interns and their supervisors.",
    //     Language: "English",
    //     Country: "United States",
    //     Awards: "Won 4 Primetime Emmys. 85 wins & 244 nominations total",
    //     Poster: "https://m.media-amazon.com/images/M/MV5BODA2Mjk0N2MtNGY0Mi00ZWFjLTkxODEtZDFjNDg4ZDliMGVmXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_SX300.jpg",
    //     Ratings: [
    //         {
    //             Source: "Internet Movie Database",
    //             Value: "7.6/10",
    //         },
    //     ],
    //     Metascore: "N/A",
    //     imdbRating: "7.6",
    //     imdbVotes: "317,430",
    //     imdbID: "tt0413573",
    //     Type: "series",
    //     totalSeasons: "19",
    //     Response: "True",
    // };

    return (
        <Container>
            <HeroBanner media={heroMedia} />
        </Container>
    );
};
