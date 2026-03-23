//Profile Tab
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import PersonalInfo from "@/components/user/PersonalInfo";
const profile = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="bg-black-color flex-1 justify-center px-5 py-10">
        <PersonalInfo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default profile;
