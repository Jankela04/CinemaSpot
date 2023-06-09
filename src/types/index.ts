export interface Title {
    id: string;
    rank: string;
    rankUpDown: string;
    title: string;
    fullTitle: string;
    year: string;
    image: string;
    crew: string;
    imDbRating: string;
    imDbRatingCount: string;
}

export interface TitleInfo {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: RatingsEntity[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    totalSeasons: string;
    Response: string;
}
export interface RatingsEntity {
    Source: string;
    Value: string;
}
export interface YouTubeTrailerData {
    imDbId: string;
    title: string;
    fullTitle: string;
    type: string;
    year: string;
    videoId: string;
    videoUrl: string;
    errorMessage: string;
}
