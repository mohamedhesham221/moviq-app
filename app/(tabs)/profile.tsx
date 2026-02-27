import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import ProfileHeader from "@/components/user/ProfileHeader";
const profile = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="bg-black-color flex-1 px-5 py-10">
        <ProfileHeader />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default profile;
