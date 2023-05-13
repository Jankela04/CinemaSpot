import { IMDbaxios, OMDbaxios } from "@/lib/axios";
import { useQueries } from "@tanstack/react-query";
import type { TitleInfo, YouTubeTrailerData } from "@/types";
import { IMDB_API_KEY } from "@/config";

const getTitleInfo = async (ID: string) => {
    const res = await OMDbaxios.get(`?i=${ID}`);
    return res.data as TitleInfo;
};

const getYoutubeTrailer = async (ID: string) => {
    const res = await IMDbaxios.get(`/YoutubeTrailer/${IMDB_API_KEY}/${ID}`);
    return res.data as YouTubeTrailerData;
};

//gets information about title and yt trailer
export const useTitleInfo = (ID: string) => {
    return useQueries({
        queries: [
            {
                queryKey: ["getTitleInfo", ID],
                queryFn: () => getTitleInfo(ID),
            },
            {
                queryKey: ["getYoutubeTrailer", ID],
                queryFn: () => getYoutubeTrailer(ID),
                staleTime: 1000 * 60 * 5,
            },
        ],
    });
};
