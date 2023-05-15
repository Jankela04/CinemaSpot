import { TitleInfo } from "@/types";

// gets links for ratings sites (IMDb, Rotten Tomates, Metacritic) for specific title
export const generateLink = (source: string, title: TitleInfo) => {
    if (source === "Internet Movie Database") {
        return `https://www.imdb.com/title/${title.imdbID}`;
    } else if (source === "Rotten Tomatoes") {
        const base = `https://www.rottentomatoes.com`;

        let name = title.Title;

        name = name.replace(/\s+/g, "_");
        name = name.replace(/'/g, "");

        if (title.Type === "movie") {
            return `${base}/m/${name}`;
        } else {
            return `${base}/tv/${name}`;
        }
    } else {
        const base = `https://www.metacritic.com`;

        let name = title.Title;

        name = name.replace(/\s+/g, "-");
        name = name.replace(/'/g, "");
        name = name.toLocaleLowerCase();

        if (title.Type === "movie") {
            return `${base}/movie/${name}`;
        } else {
            return `${base}/tv/${name}`;
        }
    }
};
