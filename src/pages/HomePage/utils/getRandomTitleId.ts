import { Title } from "@/types";

// returns random id of title(movie/tvshow) to show on hero banner
export const getRandomTitleId = (movies: Title[], shows: Title[]) => {
    const title = movies.concat(shows);

    const randomIndex = Math.floor(Math.random() * title.length);

    return title[randomIndex].id;
};
