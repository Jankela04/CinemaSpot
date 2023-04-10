import { IMDbaxios } from "@/lib/axios";
import { IMDB_API_KEY } from "@/config";
import { useQueries } from "@tanstack/react-query";

const getPopularShows = async () => {
    const res = await IMDbaxios.get(`/MostPopularTVs/${IMDB_API_KEY}`);
    return res.data.items;
};

const getPopularMovies = async () => {
    const res = await IMDbaxios.get(`/MostPopularMovies/${IMDB_API_KEY}`);
    return res.data.items;
};

//gets popular 200 popular movies and shows
export const usePopularTitles = () => {
    return useQueries({
        queries: [
            {
                queryKey: ["getPopularShows"],
                queryFn: () => getPopularShows(),
            },
            {
                queryKey: ["getPopularMovies"],
                queryFn: () => getPopularMovies(),
            },
        ],
    });
};
