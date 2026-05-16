import { Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Input from "@/components/Input";
import AuthText from "@/components/auth/AuthText";
import AppButton from "@/components/AppButton";
import useResetPassword from "@/hooks/user/useResetPassword";
const ResetPassword = () => {
  const { userId, secret } = useLocalSearchParams();
  const {
    handleResetPassword,
    errorMessage,
    isLoading,
    isSuccess,
    setErrorMessage,
  } = useResetPassword();
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const onSubmit = async () => {
    // Implement the logic to reset the password using userId and secret
    setErrorMessage("");
    if (!password || !confirmPassword) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    await handleResetPassword(
      userId as string,
      secret as string,
      password,
      () => {
        setPassword("");
        setConfirmPassword("");
      },
    );
  };

  return (
    <View className="bg-black-color w-full h-full px-5 pb-14 gap-2">
      <AuthText
        text="Reset your password."
        className="text-gray-color font-poppins-regular text-sm text-start mb-4"
      />
      <Input
        icon="lock"
        placeholder="New Password"
        keyboardType="email-address"
        onChangeText={(text) => setPassword(text)}
      />
      <Input
        icon="security"
        placeholder="Confirm Password"
        keyboardType="email-address"
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <AppButton
        text={isLoading ? "Loading ..." : "Reset Password"}
        className="mt-4"
        onPress={() => onSubmit()}
      />
      {errorMessage ? (
        <Text className="text-red-500 text-center mt-2">{errorMessage}</Text>
      ) : null}
      {isSuccess ? (
        <Text className="text-green-500 text-center mt-2">
          Password reset successful!
        </Text>
      ) : null}
    </View>
  );
};

export default ResetPassword;
