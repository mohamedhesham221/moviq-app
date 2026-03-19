import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBookmark } from "@/services/database";
import { useUser } from "./useUser";

export function useAddBookmark() {
  const queryClient = useQueryClient();
  const {userId} = useUser()
  const add = useMutation({
    mutationFn: addBookmark,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmarks", userId] });
    },
  });
  return { add };
}
