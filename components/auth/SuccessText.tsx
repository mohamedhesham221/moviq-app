import { View, Text } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const SuccessText = ({ text }: { text: string }) => {
  return (
    <View className="flex-row justify-start items-center gap-2 mt-2">
      <MaterialCommunityIcons name="check" size={20} color="#22c55e" />
      <Text className="text-green-500 font-poppins-regular">{text}</Text>
    </View>
  );
};

export default SuccessText;
