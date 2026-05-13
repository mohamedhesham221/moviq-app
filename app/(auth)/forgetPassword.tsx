import AuthText from "@/components/auth/AuthText";
import Input from "@/components/Input";
import React from "react";
import { View } from "react-native";
const ForgetPassword = () => {
  return (
    <View className="bg-black-color w-full h-full px-5 pb-14 gap-2">
      <AuthText
        text="Forget Password"
        className="text-white font-poppins-bold text-xl"
      />
      <AuthText
        text="Please enter your email address to receive a link to create a new password via email."
        className="text-gray-color font-poppins-regular text-sm text-center mb-4"
      />
      <Input icon="email" placeholder="email" keyboardType="email-address" />
    </View>
  );
};
export default ForgetPassword;
