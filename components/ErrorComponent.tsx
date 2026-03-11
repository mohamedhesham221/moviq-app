import { View, Text } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ErrorComponent = () => {
  return (
    <View className="flex-1 items-center justify-center gap-4 mt-6">
      <MaterialCommunityIcons name="movie-open" size={24} color="white" />
      <Text className="text-white font-poppins-regular">
        Something went wrong. Please try again later.
      </Text>
    </View>
  );
};

export default ErrorComponent;
