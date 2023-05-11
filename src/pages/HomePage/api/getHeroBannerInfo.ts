import { OMDbaxios } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { MediaInfo } from "@/types";

//returns movie/tvshow info for Hero Banner
const getHeroBannerInfo = async (ID: string) => {
    const res = await OMDbaxios.get(`?i=${ID}`);
    return res.data;
};

export const useHeroBannerInfo = (enabled: boolean, ID: string) => {
    return useQuery<MediaInfo>({
        enabled,
        queryKey: ["getHeroBannerInfo"],
        queryFn: () => getHeroBannerInfo(ID),
    });
};
