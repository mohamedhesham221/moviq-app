import { TouchableOpacity, Text } from "react-native";
import React from "react";

type AppButtonProps = {
  text: string;
  className?: string;
  onPress?: () => void;
  disabled?: boolean;
};
const AppButton = ({ text, className, onPress, disabled }: AppButtonProps) => {


  return (
    <TouchableOpacity
      className={`w-full bg-highlight-color px-5 py-3 ${className || ""}`}
      onPress={onPress}
      disabled={disabled}
    >
      <Text className="text-black-color font-poppins-regular text-center text-lg">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
