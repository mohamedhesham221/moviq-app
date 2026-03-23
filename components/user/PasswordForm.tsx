import { View } from "react-native";
import React from "react";
import Input from "../Input";
import type { PasswordFormProps } from "@/types/user.types";
const PasswordForm = ({
  password,
  setPassword,
  currentPassword,
  setCurrentPassword,
}: PasswordFormProps) => {
  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };
  return (
    <View className="flex-col gap-2">
      <Input
        icon="lock"
        placeholder="Enter your current password"
        value={currentPassword}
        onChangeText={setCurrentPassword}
        secureTextEntry
      />
      <Input
        icon="lock"
        placeholder="Enter your new password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />
    </View>
  );
};

export default PasswordForm;
