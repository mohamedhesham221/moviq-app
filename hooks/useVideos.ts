import { ENDPOINTS } from "@/constants/apiRoutes";
import { fetcher } from "@/services/api/handleRequest";
import { MediaVideos, Video } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

type VideosProps = {
  id: number;
  type: "movie" | "tv";
};
export function useVideos({ id, type }: VideosProps) {
  const { data, isError, isLoading } = useQuery<MediaVideos, Error>({
    queryKey: ["videos", id, type],
    queryFn: () => fetcher<MediaVideos>(ENDPOINTS.VIDEOS(id, type)),
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });
  const trailer = useMemo(
    () =>
      data?.results?.find(
        (v: Video) => v.type === "Trailer" && v.site === "YouTube",
      ),
    [data],
  );
  return { trailer, isError, isLoading };
}
