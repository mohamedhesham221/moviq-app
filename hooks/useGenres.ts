import { ENDPOINTS } from "@/constants/apiRoutes";
import { fetcher } from "@/services/api/handleRequest";
import type { Genres } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";
export function useGenres(category: "movie" | "tv") {
  const { data, isLoading, isError } = useQuery<Genres>({
    queryKey: ["genres", category],
    queryFn: () => fetcher<Genres>(ENDPOINTS.GENRES(category)),
  });
  const genres = data?.genres || [];

  return { genres };
}
