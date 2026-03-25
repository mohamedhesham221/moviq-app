import { SERIES_ENDPOINTS } from "@/constants/apiRoutes";
import { fetcher } from "@/services/api/handleRequest";
import type { Tv } from "@/types/tv.types";
import { useQuery } from "@tanstack/react-query";
export function useGetTvDetails(id: number) {
  const { data, isError, isLoading} = useQuery<Tv>({
    queryKey: ["tv", id],
    queryFn: () => fetcher<Tv>(SERIES_ENDPOINTS.DETAILS(id)),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
  return { tv: data, isError, isLoading };
}
