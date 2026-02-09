import { Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const BackButton = () => {
  return (
    <Pressable onPress={() => router.back()}>
      <MaterialCommunityIcons name="chevron-left" size={40} color="#ffc700" />
    </Pressable>
  );
};

export default BackButton;
