export const BASE_URL = "https://api.themoviedb.org/3/";

export const ENDPOINTS = {
  TRENDING: (time: "day" | "week") => `trending/all/${time}`,
  SEARCH_MOVIE: `search/movie`,
  SEARCH_TV: `search/tv`,
  GENRES: (category: "movie" | "tv") => `genre/${category}/list`,
};
export const MOVIE_ENDPOINTS = {
  MOVIES: (path: string) => `movie/${path}`,
  DETAILS: (movieId: number) => `movie/${movieId}`,
};
export const SERIES_ENDPOINTS = {
  SERIES: (path: string) => `tv/${path}`,
  DETAILS: (seriesId: number) => `tv/${seriesId}`,
};
