import { OMDbaxios } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { TitleInfo } from "@/types";

//returns movie/tvshow info for Hero Banner
const getHeroBannerInfo = async (ID: string) => {
    const res = await OMDbaxios.get(`?i=${ID}`);
    return res.data;
};

export const useHeroBannerInfo = (enabled: boolean, ID: string) => {
    return useQuery<TitleInfo>({
        enabled,
        queryKey: ["getHeroBannerInfo"],
        queryFn: () => getHeroBannerInfo(ID),
    });
};
