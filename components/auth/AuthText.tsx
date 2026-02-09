import { Text } from "react-native";
import React from "react";
interface AuthTextProps {
  text: string;
  className?: string;
}
const AuthText = ({ text, className }: AuthTextProps) => {
  return <Text className={className}>{text}</Text>;
};

export default AuthText;
