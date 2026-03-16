import { useQuery } from "@tanstack/react-query";
import { getBookmarks } from "@/services/database";

const handleBookmarks = async () => {
  try {
    const bookmarks = await getBookmarks();
    return bookmarks;
  } catch (error) {
    console.log(error);
  }
};
export function useWatchlist(userId: string | undefined) {
  const {
    data: bookmarks = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bookmarks", userId],
    queryFn: () => handleBookmarks(),
     staleTime: 1000 * 60,
  });
  
  return { bookmarks, isError, isLoading };
}
