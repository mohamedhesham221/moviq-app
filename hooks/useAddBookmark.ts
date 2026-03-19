import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBookmark } from "@/services/database";

export function useAddBookmark() {
  const queryClient = useQueryClient();
  const add = useMutation({
    mutationFn: addBookmark,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
    },
  });
  return { add };
}
