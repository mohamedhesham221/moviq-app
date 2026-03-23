import { useAddBookmark } from "@/hooks/bookmark/useAddBookmark";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Pressable } from "react-native";
import type { BookmarkButtonProps } from "@/types/button.types";
const BookmarkButton = ({
  id,
  poster_path,
  media_type,
  name,
  title,
}: BookmarkButtonProps) => {
  const { add } = useAddBookmark();

  return (
    <Pressable
      onPress={() => {
        add.mutate({
          mediaId: id,
          mediaType: name ? "tv" : "movie",
          mediaPoster: poster_path,
          mediaName: name || title,
        });
      }}
      hitSlop={10}
    >
      <MaterialCommunityIcons
        name="bookmark"
        size={24}
        color="white"
        className="absolute top-2 right-4"
      />
    </Pressable>
  );
};

export default BookmarkButton;
