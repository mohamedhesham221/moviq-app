import React from "react";
import { View, Text } from "react-native";

const ForgetPassword = () => {
  return (
    <View className="bg-black-color w-full h-full px-5 pb-14 gap-2">
      <Text className="text-white font-poppins-bold text-xl">
        Forget Password
      </Text>
      <Text className="text-gray-color font-poppins-regular text-sm text-center mb-4">
        Please enter your email address to receive a password reset link.
      </Text>
    </View>
  );
};
export default ForgetPassword;