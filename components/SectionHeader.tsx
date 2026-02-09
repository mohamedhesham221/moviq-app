import { View, Text } from "react-native";
import React from "react";
import BackButton from "./BackButton";

interface SectionHeaderProps {
  text: string;
  showBackButton?: boolean;
}

const SectionHeader = ({ text, showBackButton }: SectionHeaderProps) => {
  return (
    <View className="w-full h-14 flex-row justify-start items-center gap-1.5 py-2">
      {showBackButton && <BackButton />}
      <Text className="text-white font-poppins-bold text-2xl">
        {text}
      </Text>
        <Text className="text-highlight-color font-poppins-bold text-3xl">.</Text>
    </View>
  );
};

export default SectionHeader;
