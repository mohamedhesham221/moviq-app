import AppButton from "@/components/AppButton";
import AuthText from "@/components/auth/AuthText";
import Input from "@/components/Input";
import { ForgetPasswordProps, forgetPasswordSchema} from "@/constants/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text } from "react-native";
import useForgetPassword from "@/hooks/user/useForgetPassword";
const ForgetPassword = () => {
    const { handleForgetPassword, errorMessage, isLoading, isSuccess } = useForgetPassword();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgetPasswordSchema),
  });

  const onSubmit = async (formData: ForgetPasswordProps) => {
    await handleForgetPassword(formData, reset);
  };
  return (
    <View className="bg-black-color w-full h-full px-5 pb-14 gap-2">
      <AuthText
        text="Please enter your email address to receive a link to create a new password via email."
        className="text-gray-color font-poppins-regular text-sm text-start mb-4"
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            icon="email"
            placeholder="email"
            keyboardType="email-address"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.email && (
        <Text className="text-red-500">{errors.email?.message}</Text>
      )}
      <View className="bg-primary-color w-full h-12 rounded-lg items-center justify-center mt-4">
        <AppButton
          text={isLoading ? "Sending..." : "Send Reset Link"}
          className="text-white font-poppins-bold text-base"
          onPress={() => handleSubmit(onSubmit)()}
        />
      </View>
      {errorMessage ? (
        <Text className="text-red-500 mt-2">{errorMessage}</Text>
      ) : null}
      {isSuccess ? (
        <Text className="text-green-500 mt-2">Email sent successfully!</Text>
      ) : null}
      
    </View>
  );
};
export default ForgetPassword;
