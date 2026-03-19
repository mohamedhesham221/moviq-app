import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookmark } from "@/services/database";
import { Bookmark } from "@/interfaces/bookmarks";
import { useUser } from "./useUser";

export function useRemoveBookmark() {
  const queryClient = useQueryClient();
  const {userId} = useUser()
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
