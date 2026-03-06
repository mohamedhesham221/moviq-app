import type { TMDBResponse } from "@/interfaces/api";
import type { Tv } from "@/interfaces/tv";
import { SERIES_ENDPOINTS } from "@/constants/apiRoutes";
import { fetcher } from "@/services/api/handleRequest";
import { useQuery } from "@tanstack/react-query";

export function useSeries(path: string) {
  const { data, isError, isLoading } = useQuery<TMDBResponse<Tv>>({
    queryKey: ["series", path],
    queryFn: () => fetcher<TMDBResponse<Tv>>(SERIES_ENDPOINTS.SERIES(path)),
  });
  const series = data?.results ?? [];
  return {series, isError, isLoading};
}
