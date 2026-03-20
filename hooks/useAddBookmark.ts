import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBookmark } from "@/services/database";
import { useUser } from "./useUser";
import Toast from "react-native-toast-message";

export function useAddBookmark() {
  const queryClient = useQueryClient();
  const { userId } = useUser();
  const add = useMutation({
    mutationFn: addBookmark,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmarks", userId] });
      Toast.show({
        type: "customSuccess",
        text1: "Added to Watchlist",
      });
    },
    onError: (error: Error) => {
      if (error.message === "DUPLICATE") {
        Toast.show({
          type: "customWarning",
          text1: "Already Bookmarked!!"
        })
      } else {
        Toast.show({
          type: "customError",
          text1: "Something Went Wrong!!",
        })
      }
    }
  });
  return { add };
}
