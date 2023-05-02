import { useHeroBannerInfo } from "./api/getHeroBannerInfo";
import { getRandomMediaId } from "./utils/getRandomMedia";
import { usePopularTitles } from "./api/getPopularTitles";
import { HeroBanner } from "./components/HeroBanner";
import { Container } from "@mui/material";
import {PopularTitles} from "@/pages/HomePage/components/PopularTitles";

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

    return (
        <Container>
            <HeroBanner media={heroMedia} />
            <PopularTitles type={"Movies"} list={popularMovies}/>
        </Container>
    );
};
