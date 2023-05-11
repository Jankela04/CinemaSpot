import { Title } from "@/types";

// gets 20 random titles from list of popular titles
export const getTopRatedTitles = (list: Title[]) => {
    const mixedList = list.sort(() => Math.random() - 0.5);

    return mixedList.slice(0, 20);
};
