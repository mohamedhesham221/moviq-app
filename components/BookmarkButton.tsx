import { Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { useAddBookmark } from "@/hooks/useAddBookmark";
type BookmarkButtonProps = {
  id: number;
  media_type: "tv" | "movie";
  poster_path: string;
  name?: string;
  title?: string;
};

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
          mediaType: media_type,
          mediaPoster: poster_path,
          mediaName: name || title,
        });
      }}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
      android_ripple={{ color: "rgba(255,255,255,0.2)" }}
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
