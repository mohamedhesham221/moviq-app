import { View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const TrendingSkeleton = () => {
  return (
    <View className="space-y-4 w-[300px] mt-4">
      <View className="w-full h-[200px] bg-skeleton-background rounded-xl relative mb-4">
        <MaterialCommunityIcons
          name="bookmark-outline"
          size={24}
          color="white"
          className="absolute top-2 right-4"
        />
      </View>
      <View className="w-full h-8 bg-skeleton-background rounded-lg" />
      <View className="w-3/4 h-4 bg-skeleton-background rounded mt-2" />
    </View>
  );
};

export default TrendingSkeleton;
