import { fetcher } from "@/services/api/handleRequest";
import { useQuery } from "@tanstack/react-query";
import { ENDPOINTS } from "@/constants/apiRoutes";
import type { Genres, TMDBResponse } from "@/interfaces/api";
export function useGenres(category: "movie" | "tv") {
  const { data, isLoading, isError } = useQuery<Genres>({
    queryKey: ["genres", category],
    queryFn: () => fetcher<Genres>(ENDPOINTS.GENRES(category)),
  });
  const genres = data;
  
  return {genres}
}
