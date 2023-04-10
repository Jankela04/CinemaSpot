import { useHeroBannerInfo } from "./api/getHeroBannerInfo";
import { getRandomMediaId } from "./utils/getRandomMedia";
import { usePopularTitles } from "./api/getPopularTitles";

export const HomePage = () => {
    const [{ data: popularShows }, { data: popularMovies }] =
        usePopularTitles();

    if (!popularShows && !popularMovies) return null;

    const heroMediaId = getRandomMediaId(popularMovies, popularShows);

    const { data: heroMediaInfo } = useHeroBannerInfo(
        heroMediaId != null,
        heroMediaId
    );

    if (!heroMediaInfo) return null;

    return <div>{heroMediaInfo.Title}</div>;
};
