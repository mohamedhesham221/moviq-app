import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/services/api/handleRequest";
import { ENDPOINTS } from "@/constants/apiRoutes";
import type { MediaCast } from "@/interfaces/api";

type MediaCastProps = {
  id: number;
  type: "movie" | "tv";
};
export function useMediaCast({ id, type }: MediaCastProps) {
  const { data, isError, isLoading } = useQuery<MediaCast>({
    queryKey: [type, id],
    queryFn: () => fetcher<MediaCast>(ENDPOINTS.MOVIE_CAST(id, type)),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
  const cast = data?.cast || []
  return { cast, isError, isLoading };
}
