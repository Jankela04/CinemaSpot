import { useEffect, useState } from "react";
import { useHeroBannerInfo } from "./api/getHeroBannerInfo";
import { usePopularMovies } from "./api/getPopularMovies";
import { usePopularShows } from "./api/getPopularShows";
import { getRandomMediaId } from "./utils/getRandomMedia";

export const HomePage = () => {
    const { data: movies } = usePopularMovies();
    const { data: shows } = usePopularShows();
    const [heroMediaId, setHeroMediaId] = useState<string>("");
    const { data: heroMediaInfo } = useHeroBannerInfo(
        heroMediaId !== "",
        heroMediaId
    );

    useEffect(() => {
        if (movies && shows) {
            const mediaId = getRandomMediaId(movies, shows);
            setHeroMediaId(mediaId);
        }
    }, [movies, shows]);

    if (!heroMediaInfo) return null;

    console.log(heroMediaInfo);

    return <div>Test</div>;
};
