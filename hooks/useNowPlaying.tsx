import type { TMDBResponse } from "@/interfaces/api";
import type { Movie } from "@/interfaces/movie";
import { MOVIE_ENDPOINTS } from "@/constants/apiRoutes";
import { fetcher } from "@/services/api/handleRequest";
import { useQuery } from "@tanstack/react-query";

export const useNowPlaying = () => {
  const { data, isError, isLoading } = useQuery<TMDBResponse<Movie>>({
    queryKey: ["latest-movies"],
    queryFn: () => fetcher<TMDBResponse<Movie>>(MOVIE_ENDPOINTS.NOW_PLAYING),
  });
  const movies = data?.results.slice(0, 5);
  return { movies };
};
