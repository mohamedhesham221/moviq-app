import type { TMDBResponse } from "@/interfaces/api";
import { fetcher } from "@/services/api/handleRequest";
import { useQuery } from "@tanstack/react-query";
import type { Tv } from "@/interfaces/tv";
import { SERIES_ENDPOINTS } from "@/constants/apiRoutes";
export const useOnTheAir = () => {
  const {
    data,
    isError,
    isLoading,
  } = useQuery<TMDBResponse<Tv>>({
    queryKey: ["latest-series"],
    queryFn: () => fetcher<TMDBResponse<Tv>>(SERIES_ENDPOINTS.ON_THE_AIR),
  });
const series = data?.results.slice(0,5)
  return {series}
};
