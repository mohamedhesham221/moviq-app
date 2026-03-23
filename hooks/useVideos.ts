import { ENDPOINTS } from "@/constants/apiRoutes";
import { fetcher } from "@/services/api/handleRequest";
import { MediaVideos, Video } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";

type VideosProps = {
  id: number;
  type: "movie" | "tv";
};
export function useVideos({ id, type }: VideosProps) {
  const {
    data: videos = [],
    isError,
    isLoading,
  } = useQuery<MediaVideos, Error, Video[]>({
    queryKey: ["videos", id, type],
    queryFn: () => fetcher<MediaVideos>(ENDPOINTS.VIDEOS(id, type)),
    select: (data) => data.results,
    staleTime: 1000 * 60 * 5,
  });
  return { videos, isError, isLoading };
}
