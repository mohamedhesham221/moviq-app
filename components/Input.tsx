import { View, TextInput, TextInputProps } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";

type IconName = keyof typeof MaterialCommunityIcons.glyphMap;
interface InputProps extends TextInputProps {
  icon: IconName;
}

const Input = ({ icon, ...props }: InputProps) => {
  return (
    <View className="w-full h-15 bg-field-background rounded-md px-4 justify-start items-center flex-row gap-4">
      <MaterialCommunityIcons name={icon} size={24} color="gray" className="" />
      <TextInput
        {...props}
        placeholderTextColor="#888888"
        className="font-poppins-regular text-md leading-normal text-white w-full flex-1 h-full py-4"
        autoCorrect={false}
        textAlignVertical="center"
      />
    </View>
  );
};

export default Input;
