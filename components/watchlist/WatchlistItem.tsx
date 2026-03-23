import { useRemoveBookmark } from "@/hooks/bookmark/useRemoveBookmark";
import type { Bookmark } from "@/types/bookmarks.types";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Dimensions, Pressable, View } from "react-native";
import PosterItem from "../PosterItem";

const { width } = Dimensions.get("window");
const itemWidth = width / 2 - 16;
const WatchlistItem = ({ item }: { item: Bookmark }) => {
  const { remove } = useRemoveBookmark();

  return (
    <View className=" relative" style={{ width: itemWidth }}>
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
