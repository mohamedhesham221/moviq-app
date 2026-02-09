import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

const LoadingText = ({ text }: { text: string }) => {
  return (
    <View className="flex-row justify-start items-center gap-2 mt-2">
      <ActivityIndicator size="small" color="#22c55e" />
      <Text className="text-green-500 font-poppins-regular text-center mt-2">{text}</Text>
    </View>
  );
};

export default LoadingText; 