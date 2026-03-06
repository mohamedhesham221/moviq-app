import type { TMDBResponse } from "@/interfaces/api";
import type { Movie } from "@/interfaces/movie";
import { MOVIE_ENDPOINTS } from "@/constants/apiRoutes";
import { fetcher } from "@/services/api/handleRequest";
import { useQuery } from "@tanstack/react-query";

export function useMovies(path: string) {
  const { data, isError, isLoading } = useQuery<TMDBResponse<Movie>>({
    queryKey: ["movies", path],
    queryFn: () => fetcher<TMDBResponse<Movie>>(MOVIE_ENDPOINTS.MOVIES(path)),
  });
  const movies = data?.results ?? [];
  return {movies, isError, isLoading};
}
