import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/services/api/handleRequest";
import { ENDPOINTS } from "@/constants/apiRoutes";
import type { MediaCast, Cast } from "@/interfaces/api";

type MediaCastProps = {
  id: number;
  type: "movie" | "tv";
};
export function useMediaCast({ id, type }: MediaCastProps) {
  const {
    data: cast = [],
    isError,
    isLoading,
  } = useQuery<MediaCast, Error, Cast[]>({
    queryKey: ["cast", type, id],
    queryFn: () => fetcher<MediaCast>(ENDPOINTS.CAST(id, type)),
    select: (data) => data.cast,
    staleTime: 1000 * 60 * 5,
  });
  
  return { cast, isError, isLoading };
}
