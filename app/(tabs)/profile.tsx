import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import ProfileHeader from "@/components/user/ProfileHeader";
import PersonalInfo from "@/components/user/PersonalInfo";
import Divider from "@/components/Divider";
import LogoutButton from "@/components/user/LogoutButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const profile = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="bg-black-color flex-1 justify-center px-5 py-10">
        <ProfileHeader />
        <View className=" bg-[#080808] px-2 rounded-xl my-6 py-5">
          <View className="flex-row gap-2">
            <MaterialCommunityIcons name="account" color={'#ffc700'} size={24} />
            <Text className="text-highlight-color text-lg font-poppins-bold ">
              Account
            </Text>
          </View>
          <Divider />
          <PersonalInfo />
        </View>
        <LogoutButton />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default profile;
