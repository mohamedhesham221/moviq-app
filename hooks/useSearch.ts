import { ENDPOINTS } from "@/constants/apiRoutes";
import { useDebounce } from "@/hooks/useDebounce";
import { fetcher } from "@/services/api/handleRequest";
import { TMDBResponse } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";
type SearchResults = {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  media_type: "tv" | "movie";
};

const fetchSearchItems = async (q: string): Promise<SearchResults[]> => {
  if (!q) return [];
  const urls = [
    `${ENDPOINTS.SEARCH_MOVIE}?query=${q}`,
    `${ENDPOINTS.SEARCH_TV}?query=${q}`,
  ];

  const [movie, tv] = await Promise.all(
    urls.map((s) => fetcher<TMDBResponse<SearchResults>>(s)),
  );

  return [
    ...movie.results.map((m) => ({ ...m, media_type: "movie" as const })),
    ...tv.results.map((t) => ({ ...t, media_type: "tv" as const })),
  ];
};
export function useSearch(searchQuery: string) {
  const { debouncedValue } = useDebounce(searchQuery, 500);
  const { data, isError, isLoading } = useQuery<SearchResults[]>({
    queryKey: ["searchQuery", debouncedValue],
    queryFn: () => fetchSearchItems(debouncedValue),
    enabled: !!debouncedValue,
  });
  const results = data || [];
  return { results, isLoading, isError };
}
