import { View, Animated } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { usePulse } from "@/hooks/usePulse";

const TrendingSkeleton = () => {
    const opacity = usePulse();
  
  return (
    <Animated.View style={{opacity}} className="space-y-4 w-[300px] mt-4">
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
    </Animated.View>
  );
};

export default TrendingSkeleton;
