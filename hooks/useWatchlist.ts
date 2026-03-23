import { useQuery } from "@tanstack/react-query";
import { getBookmarks } from "@/services/database";
import { useUser } from "@/hooks/user/useUser";

const handleBookmarks = async () => {
  try {
    const bookmarks = await getBookmarks();
    return bookmarks;
  } catch (error) {
    console.log(error);
    return []
  }
};
export function useWatchlist() {
  const { userId } = useUser();

  const {
    data: bookmarks = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bookmarks", userId],
    queryFn: () => handleBookmarks(),
    staleTime: 1000 * 60,
    enabled: !!userId,
  });

  return { bookmarks, isError, isLoading };
}
