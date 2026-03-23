import { Bookmark } from "@/interfaces/bookmarks";
import { deleteBookmark } from "@/services/database";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { useUser } from "../user/useUser";

export function useRemoveBookmark() {
  const queryClient = useQueryClient();
  const { userId } = useUser();
  const remove = useMutation({
    mutationFn: deleteBookmark,
    onSuccess: (_, documentId) => {
      queryClient.setQueryData(["bookmarks", userId], (old: Bookmark[]) => {
        const newList = old?.filter((b) => b.$id !== documentId) ?? [];
        return [...newList];
      });
      Toast.show({
        type: "customRemove",
        text1: "Removed from Watchlist",
      });
    },
  });
  return { remove };
}
