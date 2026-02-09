import { View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const HomeSkeleton = () => {
  return (
    <View className="w-full h-72 mt-8 flex-row gap-4 items-stretch">
      <View className="flex-1 bg-skeleton-background rounded-xl relative">
        <MaterialCommunityIcons
          name="bookmark-outline"
          size={24}
          color="white"
          className="absolute top-2 right-4"
        />
      </View>
      <View className="flex-1">
        <View className="w-full h-8 bg-skeleton-background rounded-lg" />
        <View className="w-full h-6 bg-skeleton-background rounded mt-2" />
        <View className="w-3/4 h-4 bg-skeleton-background rounded mt-2" />
        <View className="w-full h-20 bg-skeleton-background rounded-lg mt-6" />
      </View>
    </View>
  );
};

export default HomeSkeleton;
