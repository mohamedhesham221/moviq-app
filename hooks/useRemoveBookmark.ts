import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookmark } from "@/services/database";
import { Bookmark } from "@/interfaces/bookmarks";

export function useRemoveBookmark(userId: string) {
  const queryClient = useQueryClient();
  const remove = useMutation({
    mutationFn: deleteBookmark,
    onSuccess: (_, documentId) => {
  queryClient.setQueryData(["bookmarks", userId], (old: Bookmark[]) =>{
    const newList = old?.filter((b) => b.$id !== documentId) ?? []
    return [...newList]
  }
  );
}
  });
  return { remove };
}
