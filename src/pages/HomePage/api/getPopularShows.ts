import { IMDbaxios } from "@/lib/axios";
import { IMDB_API_KEY } from "@/config";
import { useQuery } from "@tanstack/react-query";
import { Media } from "../types";

// returns top 100 popular/trending movies
const getPopularShows = async () => {
    const res = await IMDbaxios.get(`/MostPopularTVs/${IMDB_API_KEY}`);
    return res.data.items;
};

export const usePopularShows = () => {
    return useQuery<Media[]>({
        queryKey: ["getPopularShows"],
        queryFn: () => getPopularShows(),
    });
};
