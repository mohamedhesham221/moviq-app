import { Text } from "react-native";
import React from "react";
import type { AuthTextProps } from "@/types/auth.types";
const AuthText = ({ text, className }: AuthTextProps) => {
  return <Text className={className}>{text}</Text>;
};

export default AuthText;
