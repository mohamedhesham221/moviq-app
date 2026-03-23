import { SERIES_ENDPOINTS } from "@/constants/apiRoutes";
import { fetcher } from "@/services/api/handleRequest";
import type { TMDBResponse } from "@/types/api.types";
import type { Tv } from "@/types/tv.types";
import { useQuery } from "@tanstack/react-query";

export function useSeries(path: string) {
  const { data, isError, isLoading } = useQuery<TMDBResponse<Tv>>({
    queryKey: ["series", path],
    queryFn: () => fetcher<TMDBResponse<Tv>>(SERIES_ENDPOINTS.SERIES(path)),
  });
  const series = data?.results ?? [];
  return { series, isError, isLoading };
}
