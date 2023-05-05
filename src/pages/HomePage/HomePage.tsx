import { useHeroBannerInfo } from "./api/getHeroBannerInfo";
import { getRandomTitleId } from "./utils/getRandomTitleId";
import { usePopularTitles } from "./api/getPopularTitles";
import { HeroBanner } from "./components/HeroBanner";
import { Container } from "@mui/material";
import { PopularTitles } from "@/pages/HomePage/components/PopularTitles";
import { getTopRatedTitles } from "./utils/get20RandomTitles";

export const HomePage = () => {
    const [{ data: popularShows }, { data: popularMovies }] =
        usePopularTitles();

    if (!popularShows && !popularMovies) return null;

    const heroMediaId = getRandomTitleId(popularMovies, popularShows);

    const { data: heroMedia } = useHeroBannerInfo(
        heroMediaId != null,
        heroMediaId
    );

    if (!heroMedia) return null;

    return (
        <Container>
            <HeroBanner media={heroMedia} />
            <PopularTitles
                type={"Movies"}
                list={getTopRatedTitles(popularMovies)}
            />
            <PopularTitles
                type={"Shows"}
                list={getTopRatedTitles(popularShows)}
            />
        </Container>
    );
};
