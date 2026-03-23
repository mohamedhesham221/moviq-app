import { MOVIE_ENDPOINTS } from "@/constants/apiRoutes";
import { fetcher } from "@/services/api/handleRequest";
import type { TMDBResponse } from "@/types/api.types";
import type { Movie } from "@/types/movie.types";
import { useQuery } from "@tanstack/react-query";

export const useNowPlaying = () => {
  const { data, isError, isLoading } = useQuery<TMDBResponse<Movie>>({
    queryKey: ["latest-movies"],
    queryFn: () =>
      fetcher<TMDBResponse<Movie>>(MOVIE_ENDPOINTS.MOVIES("now_playing")),
  });
  //render some elements to backend have not pagination
  const movies = data?.results.slice(0, 5);
  return { movies, isLoading };
};
