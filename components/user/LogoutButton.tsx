import { View, Text, Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { logout } from "@/services/userAuth";
import React from "react";
import { router } from "expo-router";
import { APP_ROUTES } from "@/constants/appRoutes";

const LogoutButton = () => {
  //redirect to login page if user logout
  const handleLogout = async () => {
    try {
      const response = await logout();
      if (response) {
        router.replace(APP_ROUTES.WELCOME);
      }
      console.log("Logout successful:", response);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <View className="flex-row justify-between items-center gap-2 rounded-lg bg-[#d70000] px-4 py-3 mt-5">
      <Pressable
        className=" justify-start items-center flex-row gap-4"
        onPress={handleLogout}
      >
        <MaterialCommunityIcons
          name={"logout"}
          size={24}
          color="white"
          className=""
        />
        <Text className="flex-grow text-white font-poppins-regular">
          Logout
        </Text>
      </Pressable>
    </View>
  );
};

export default LogoutButton;
