import { Media } from "@/types";

// returns random id of media(movie/tvshow) to show on hero banner
export const getRandomTitleId = (movies: Media[], shows: Media[]) => {
    const media = movies.concat(shows);

    const randomIndex = Math.floor(Math.random() * media.length);

    return media[randomIndex].id;
};
