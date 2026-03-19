import { View, Pressable } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import PosterItem from "../PosterItem";
import { useRemoveBookmark } from "@/hooks/useRemoveBookmark";
import type { Bookmark } from "@/interfaces/bookmarks";

const WatchlistItem = ({ item }: { item: Bookmark }) => {
  const { remove } = useRemoveBookmark();

  return (
    <View className="flex-1 relative">
      <PosterItem
        poster={item.mediaPoster}
        title={item.mediaName}
        id={item.mediaId}
        mediaType={item.mediaType}
      />

      {/* Delete Button */}
      <Pressable
        onPress={() => {
          remove.mutate(item.$id);
        }}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
        android_ripple={{
          color: "rgba(255,255,255,0.2)",
          borderless: true,
        }}
        hitSlop={10}
        className="absolute top-2 right-2 bg-black/60 rounded-full p-1 z-10"
      >
        <MaterialCommunityIcons
          name="bookmark-remove"
          size={20}
          color="white"
        />
      </Pressable>
    </View>
  );
};

export default WatchlistItem;
