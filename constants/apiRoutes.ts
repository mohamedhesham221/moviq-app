export const BASE_URL = "https://api.themoviedb.org/3/";

export const ENDPOINTS = {
  TRENDING: (time: "day" | "week") => `trending/all/${time}`,
  SEARCH: `search/multi`,
  GENRES: (category: "movie" | "tv") => `genre/${category}/list`,
};
export const MOVIE_ENDPOINTS = {
  NOW_PLAYING: `movie/now_playing`,
  POPULAR: `movie/popular`,
  TOP_RATED: `movie/top_rated`,
  UPCOMING: `movie/upcoming`,
  DETAILS: (movieId: number) => `movie/${movieId}`,
};
export const SERIES_ENDPOINTS = {
  AIRING_TODAY: `tv/airing_today`,
  ON_THE_AIR: `tv/on_the_air`,
  POPULAR: `tv/popular`,
  TOP_RATED: `tv/top_rated`,
  DETAILS: (seriesId: number) => `tv/${seriesId}`,
};
