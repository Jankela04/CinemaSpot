import Axios from "axios";
import { IMDB_API_URL, OMDB_API_URL, OMDB_API_KEY } from "@/config";

// OMDb api for getting general info about movie/tvshow
export const OMDbaxios = Axios.create({ baseURL: OMDB_API_URL });

OMDbaxios.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params.apikey = OMDB_API_KEY;
    return config;
});

// IMDb api for getting lists (popular shows/movies, movies in theatres) and for searching specific movie/show
export const IMDbaxios = Axios.create({ baseURL: IMDB_API_URL });
