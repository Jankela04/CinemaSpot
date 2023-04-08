import { IMDbaxios } from "@/lib/axios";
import { IMDB_API_KEY } from "@/config";
import { useQuery } from "@tanstack/react-query";
import { Media } from "../types";

// returns top 100 popular/trending movies
const getPopularMovies = async () => {
    const res = await IMDbaxios.get(`/MostPopularMovies/${IMDB_API_KEY}`);
    return res.data.items;
};

export const usePopularMovies = () => {
    return useQuery<Media[]>({
        queryKey: ["getPopularMovies"],
        queryFn: () => getPopularMovies(),
    });
};
