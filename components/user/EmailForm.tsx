import { View } from "react-native";
import React from "react";
import Input from "../Input";
type EmailFormProps = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  currentPassword: string;
  setCurrentPassword: React.Dispatch<React.SetStateAction<string>>;
};
const EmailForm = ({ email, setEmail, currentPassword, setCurrentPassword }: EmailFormProps) => {
  const handleEmailChange = (text: string) => {
    setEmail(text);
  };
  return (
    <View className="flex-col gap-2">
    <Input
      placeholder="Enter your new email"
      icon="email"
      value={email}
      onChangeText={handleEmailChange}
    />
      <Input
        icon="lock"
        placeholder="Enter your current password"
        value={currentPassword}
        onChangeText={setCurrentPassword}
        secureTextEntry
      />
    </View>
  );
};

export default EmailForm;
