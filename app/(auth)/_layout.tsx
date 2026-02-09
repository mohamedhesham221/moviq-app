import { StatusBar } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import BackButton from "@/components/BackButton";

export default function AuthLayout() {
  return (
    <>
      <StatusBar hidden={true} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#111111" },
          headerShadowVisible: false,
          headerLeft: () => <BackButton />,
        }}
      >
        <Stack.Screen
          name="register"
          options={{
            title: "",
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            title: "",
          }}
        />
      </Stack>
    </>
  );
}
