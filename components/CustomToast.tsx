import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Text, View } from "react-native";
import type { CustomToastProps } from "@/types/toast.types";
const CustomToast = ({ text1, text2, iconName, color }: CustomToastProps) => {
  return (
    <View className="bg-black px-4 py-3 rounded-xl flex-row items-start gap-2">
      <MaterialCommunityIcons name={iconName} size={20} color={color} />
      <View className="flex-col gap-2">
        <Text className="text-white font-poppins-bold">{text1}</Text>
        {text2 && (
          <Text className="text-gray-color font-poppins-regular">{text2}</Text>
        )}
      </View>
    </View>
  );
};

export default CustomToast;
