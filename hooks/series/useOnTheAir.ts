import { SERIES_ENDPOINTS } from "@/constants/apiRoutes";
import { fetcher } from "@/services/api/handleRequest";
import type { TMDBResponse } from "@/types/api.types";
import type { Tv } from "@/types/tv.types";
import { useQuery } from "@tanstack/react-query";
export const useOnTheAir = () => {
  const { data, isError, isLoading } = useQuery<TMDBResponse<Tv>>({
    queryKey: ["latest-series"],
    queryFn: () =>
      fetcher<TMDBResponse<Tv>>(SERIES_ENDPOINTS.SERIES("on_the_air")),
  });
  const series = data?.results.slice(0, 5);
  return { series };
};
