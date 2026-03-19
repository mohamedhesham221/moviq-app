import { View, Text } from "react-native";
import React from "react";

type MediaOverviewProps = {
  overview: string;
};
const MediaOverview = ({ overview }: MediaOverviewProps) => {
  return (
    <View className="w-full px-5 py-10">
      <Text className="text-gray-color font-poppins-regular text-base">
        {overview}
      </Text>
    </View>
  );
};

export default MediaOverview;
