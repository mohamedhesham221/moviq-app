import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Text, View } from "react-native";
import type { CustomToastProps } from "@/types/toast.types";
const CustomToast = ({ text, iconName, color }: CustomToastProps) => {
  return (
    <View className="bg-black px-4 py-3 rounded-xl flex-row items-center gap-2">
      <MaterialCommunityIcons name={iconName} size={20} color={color} />
      <Text className="text-white font-poppins-bold">{text}</Text>
    </View>
  );
};

export default CustomToast;
